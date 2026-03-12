import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Scholar Data Documentation",
  description: "Documentation for Scholar Data",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about" },
      { text: "Features", link: "/features/" },
      { text: "Data Collection", link: "/data-collection/" },
      { text: "S-index Calculation", link: "/s-index-calculation/" },
    ],

    sidebar: [
      { text: "About", link: "/about", items: [] },
      {
        text: "Features",
        link: "/features/",
        items: [
          { text: "Sign Up", link: "/features/sign-up" },
          { text: "Getting Your S-index", link: "/features/s-index" },
          { text: "Auto-created Profiles", link: "/features/profiles" },
        ],
      },
      {
        text: "Data Collection",
        link: "/data-collection/",
        items: [
          {
            text: "Dataset Metadata",
            link: "/data-collection/dataset-metadata",
          },
          { text: "Citations", link: "/data-collection/citations" },
          { text: "Mentions", link: "/data-collection/mentions" },
          { text: "FAIR Scores", link: "/data-collection/fair-scores" },
        ],
      },
      {
        text: "S-index Calculation",
        link: "/s-index-calculation/",
        items: [],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
