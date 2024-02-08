import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/benny-blog/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "Benny's Blog",
      description: "Benny's Blog - Technology and Life",
    },
    "/": {
      lang: "zh-TW",
      title: "斑鳩的技術生活",
      description: "斑鳩的技術生活",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
