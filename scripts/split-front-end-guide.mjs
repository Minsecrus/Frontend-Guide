import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, "..");
const sourceFile = path.join(rootDir, "前端.md");
const docsDir = path.join(rootDir, "src", "pages", "docs");
const dataDir = path.join(rootDir, "src", "data");
const docsDataFile = path.join(dataDir, "docs.ts");
const LONG_SECTION_LINE_THRESHOLD = 320;

function stripInlineMarkdown(value) {
  return value
    .replace(/!\[[^\]]*]\([^)]+\)/g, "")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/[*_`~]/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanHeading(line) {
  return stripInlineMarkdown(line.replace(/^#{1,6}\s+/, ""));
}

function slugify(text) {
  const ascii = stripInlineMarkdown(text)
    .normalize("NFKD")
    .replace(/[^\x00-\x7F]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
  return ascii || "section";
}

function makeFrontmatter(meta) {
  return [
    "---",
    "layout: ../../layouts/DocLayout.astro",
    `title: ${JSON.stringify(meta.title)}`,
    `order: ${meta.order}`,
    `slug: ${JSON.stringify(meta.slug)}`,
    "---",
    ""
  ].join("\n");
}

function splitByH3(section) {
  const chunks = [];
  let currentChunk = null;
  const introLines = [];

  for (const line of section.lines) {
    if (/^###(?!#)\s+/.test(line)) {
      if (currentChunk) {
        chunks.push(currentChunk);
      }
      currentChunk = {
        heading: cleanHeading(line),
        lines: [line]
      };
      continue;
    }

    if (currentChunk) {
      currentChunk.lines.push(line);
    } else {
      introLines.push(line);
    }
  }

  if (currentChunk) {
    chunks.push(currentChunk);
  }

  return { introLines, chunks };
}

const markdown = await fs.readFile(sourceFile, "utf8");
const normalized = markdown.replace(/\r\n/g, "\n");
const lines = normalized.split("\n");

let mainTitle = "Front-End Guide";
const prefaceLines = [];
const sections = [];
let currentSection = null;

for (const line of lines) {
  if (/^#(?!#)\s+/.test(line) && !currentSection && sections.length === 0 && prefaceLines.length === 0) {
    mainTitle = cleanHeading(line);
    continue;
  }

  if (/^##(?!#)\s+/.test(line)) {
    if (currentSection) {
      sections.push(currentSection);
    }
    currentSection = {
      title: cleanHeading(line),
      lines: []
    };
    continue;
  }

  if (currentSection) {
    currentSection.lines.push(line);
  } else {
    prefaceLines.push(line);
  }
}

if (currentSection) {
  sections.push(currentSection);
}

const docs = [];
const prefaceContent = prefaceLines.join("\n").trim();
if (prefaceContent) {
  docs.push({
    title: mainTitle,
    lines: prefaceLines
  });
}

for (const section of sections) {
  const h3Count = section.lines.filter((line) => /^###(?!#)\s+/.test(line)).length;
  const shouldSplitByH3 = h3Count > 0 && section.lines.length >= LONG_SECTION_LINE_THRESHOLD;

  if (!shouldSplitByH3) {
    docs.push(section);
    continue;
  }

  const { introLines, chunks } = splitByH3(section);
  const introContent = introLines.join("\n").trim();
  if (introContent) {
    docs.push({
      title: section.title,
      lines: introLines
    });
  }

  for (const chunk of chunks) {
    docs.push({
      title: `${section.title} / ${chunk.heading}`,
      lines: chunk.lines
    });
  }
}

await fs.mkdir(docsDir, { recursive: true });
await fs.mkdir(dataDir, { recursive: true });

const existingFiles = await fs.readdir(docsDir, { withFileTypes: true });
await Promise.all(
  existingFiles
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => fs.unlink(path.join(docsDir, entry.name)))
);

const metadata = [];
const usedSlugs = new Set();
for (let index = 0; index < docs.length; index += 1) {
  const doc = docs[index];
  const prefix = String(index + 1).padStart(2, "0");
  const baseSlug = `${prefix}-${slugify(doc.title)}`;
  let slug = baseSlug;
  let count = 2;
  while (usedSlugs.has(slug)) {
    slug = `${baseSlug}-${count}`;
    count += 1;
  }
  usedSlugs.add(slug);
  const content = doc.lines.join("\n").trimStart();
  const meta = {
    title: doc.title,
    slug,
    order: index + 1
  };

  const fileContent = `${makeFrontmatter(meta)}${content}\n`;
  await fs.writeFile(path.join(docsDir, `${slug}.md`), fileContent, "utf8");
  metadata.push(meta);
}

const docsData = [
  "export type DocMeta = {",
  "  title: string;",
  "  slug: string;",
  "  order: number;",
  "};",
  "",
  `export const docs: DocMeta[] = ${JSON.stringify(metadata, null, 2)};`,
  ""
].join("\n");

await fs.writeFile(docsDataFile, docsData, "utf8");

console.log(`Generated ${metadata.length} docs pages in src/pages/docs`);
