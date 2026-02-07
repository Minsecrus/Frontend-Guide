import { defineConfig } from "astro/config";

const [githubOwner, githubRepo] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const isUserSite =
  githubOwner &&
  githubRepo &&
  githubRepo.toLowerCase() === `${githubOwner.toLowerCase()}.github.io`;

export default defineConfig({
  site: process.env.SITE_URL ?? (githubOwner ? `https://${githubOwner}.github.io` : undefined),
  base:
    process.env.BASE_PATH ??
    (isGitHubActions && githubRepo && !isUserSite ? `/${githubRepo}` : "/"),
  markdown: {
    shikiConfig: {
      theme: "dracula"
    }
  }
});
