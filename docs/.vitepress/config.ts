import { defineConfig } from "vitepress";
import texmath from "markdown-it-texmath";
import katex from "katex";
import { mermaidPlugin } from "./plugins/vitepress-mermaid";

// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: "Scholar Data Documentation",
  description: "Documentation for Scholar Data",
  cleanUrls: true,
  markdown: {
    config: (md) => {
      md.use(texmath, {
        engine: katex,
        delimiters: "dollars",
      });
      md.use(mermaidPlugin);
    },
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon-96x96.png",
        sizes: "96x96",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
    ],
    [
      "link",
      {
        rel: "shortcut icon",
        href: "/favicon.ico",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-title",
        content: "MyWebSite",
      },
    ],
    [
      "link",
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/markdown-it-texmath/css/texmath.min.css",
      },
    ],
  ],
  themeConfig: {
    editLink: {
      pattern: "https://github.com/data-S-index/docs/tree/main/docs/:path",
    },
    lastUpdated: true,
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about" },
      { text: "For Researchers", link: "/using-scholar-data/for-researchers" },
      {
        text: "Browse and Explore",
        link: "/using-scholar-data/browse-explore",
      },
      { text: "Concepts", link: "s-index-guide/concepts" },
      { text: "Data Collection", link: "/data-collection/datasets" },
      { text: "Development", link: "/development" },
    ],

    sidebar: [
      { text: "About", link: "/about", items: [] },
      {
        text: "Using Scholar Data",
        items: [
          {
            text: "For Researchers",
            link: "using-scholar-data/for-researchers",
          },
          {
            text: "For Data Repositories",
            link: "using-scholar-data/for-repositories",
          },
          {
            text: "Browse and Explore",
            link: "using-scholar-data/browse-explore",
          },
          {
            text: "Search Feature",
            link: "using-scholar-data/search-feature",
          },
        ],
      },
      {
        text: "S-index Guide",
        items: [
          {
            text: "Concepts",
            link: "s-index-guide/concepts",
          },
          {
            text: "Validation",
            link: "s-index-guide/validation",
          },
          {
            text: "Design Rationale",
            link: "s-index-guide/design",
          },
          {
            text: "Understanding Your S-index",
            link: "s-index-guide/understanding",
          },
          {
            text: "Improving",
            link: "s-index-guide/improving",
          },
        ],
      },
      {
        text: "Data Collection",
        items: [
          { text: "Overview", link: "/data-collection/overview" },
          { text: "Datasets", link: "/data-collection/datasets" },
          { text: "FAIR Scores", link: "/data-collection/fair-scores" },
          { text: "Citations", link: "/data-collection/citations" },
          { text: "Mentions", link: "/data-collection/mentions" },
          { text: "Research Fields", link: "/data-collection/research-fields" },
          {
            text: "Auto-Generated Profiles",
            link: "/data-collection/auto-profiles",
          },
        ],
      },
      { text: "Platform Development", link: "/development", items: [] },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/data-S-index" }],
    footer: {
      message:
        'Documentation written with assistance from <a href="https://claude.ai">Claude</a> by Anthropic.',
    },
  },
});
