import { defineConfig } from "astro/config";

export default defineConfig({
  site: process.env.SITE_URL ?? "https://minsecrus.github.io",
  base: process.env.BASE_PATH ?? "/Frontend-Guide/",
  markdown: {
    shikiConfig: {
      theme: "dracula"
    }
  }
});
