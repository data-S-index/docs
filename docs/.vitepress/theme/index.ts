// .vitepress/theme/index.ts
import DefaultTheme from "vitepress/theme";
import "./custom.css";

import type { Theme } from "vitepress";
import VitePressMermaid from "../plugins/vitepress-mermaid/index.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("vitepress-mermaid", VitePressMermaid);
  },
} satisfies Theme;
