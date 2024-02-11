import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    // {
    //   text: "如何使用",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    // "intro",
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      // children: "structure",
      children: [
        {
          text: "技術",
          prefix: "tech/",
          children: "structure",
        },
        {
          text: "雜項",
          prefix: "misc/",
          children: "structure",
        },
      ]
    },
  ],
});
