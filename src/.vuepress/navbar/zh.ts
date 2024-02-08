import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  // "/demo/",
  {
    text: "文章",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
    //   {
    //     text: "苹果",
    //     icon: "pen-to-square",
    //     prefix: "apple/",
    //     children: [
    //       { text: "苹果1", icon: "pen-to-square", link: "1" },
    //       { text: "苹果2", icon: "pen-to-square", link: "2" },
    //       "3",
    //       "4",
    //     ],
    //   },
    //   {
    //     text: "香蕉",
    //     icon: "pen-to-square",
    //     prefix: "banana/",
    //     children: [
    //       {
    //         text: "香蕉 1",
    //         icon: "pen-to-square",
    //         link: "1",
    //       },
    //       {
    //         text: "香蕉 2",
    //         icon: "pen-to-square",
    //         link: "2",
    //       },
    //       "3",
    //       "4",
    //     ],
    //   },
    //   { text: "樱桃", icon: "pen-to-square", link: "cherry" },
    //   { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
    //   "tomato",
    //   "strawberry",
      {
        text: "技術",
        icon: "blog",
        prefix: "tech/",
        children: [
          "Nextcloud AIO 命令行升級維護筆記"
        ],
      },
    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
