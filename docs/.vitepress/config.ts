import { defineConfig } from "vitepress";
import texmath from "markdown-it-texmath";
import katex from "katex";

// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: "Scholar Data Documentation",
  description: "Documentation for Scholar Data",
  markdown: {
    config: (md) => {
      md.use(texmath, {
        engine: katex,
        delimiters: "dollars",
      });
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
      { text: "For Researchers", link: "/for-researchers" },
      { text: "Browse and Explore", link: "/browse-explore" },
      { text: "Concepts", link: "/concepts" },
      { text: "Data Collection", link: "/data-collection/datasets" },
    ],

    sidebar: [
      { text: "About", link: "/about", items: [] },
      {
        text: "For Researchers",
        link: "/for-researchers",
        items: [],
      },
      { text: "Browse and Explore", link: "/browse-explore", items: [] },
      {
        text: "Concepts",
        link: "/concepts",
        items: [],
      },
      {
        text: "Data Collection",
        items: [
          { text: "Datasets", link: "/data-collection/datasets" },
          { text: "FAIR Scores", link: "/data-collection/fair-scores" },
          { text: "Citations", link: "/data-collection/citations" },
          { text: "Mentions", link: "/data-collection/mentions" },
          { text: "Research Fields", link: "/data-collection/research-fields" },
          {
            text: "Normalization Factors",
            link: "/data-collection/normalization-factors",
          },
          { text: "D-index Calculation", link: "/data-collection/d-index" },
          { text: "S-index Calculation", link: "/data-collection/s-index" },
        ],
      },
      {
        text: "Integrations",
        link: "/integrations",
        items: [],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/data-S-index" }],
    footer: {
      message:
        'Documentation written with assistance from <a href="https://claude.ai">Claude</a> by Anthropic.',
    },
  },
});
