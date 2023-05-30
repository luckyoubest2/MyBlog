import { navbar } from "vuepress-theme-hope";

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default navbar([
  { text: "博客", icon: "blog", link: "/blog" },
  { text: "读书", icon: "read", link: "/category/读书笔记" },
  {
    text: "生活",
    icon: "emmet",
    prefix: "/category/",
    children: [
      {
        text: "随笔",
        icon: "alias",
        link: "随笔",
      }, 
      {
        text: "游记",
        icon: "activity",
        link: "游记",
      }, 
      {
        text: "评测",
        icon: "editor",
        link: "评测",
      }, 
      {
        text: "影评",
        icon: "https://icon-sets.iconify.design/icon-park-twotone/movie/",
        link: "影评",
      }, 
    ],
  },
  {
    text: "网络",
    icon: "app",
    prefix: "/category/",
    children: [
      {
        text: "数据库",
        icon: "folder",
        link: "数据库",
      },
      {
        text: "解决方案",
        icon: "guide",
        link: "解决方案",
      },
      {
        text: "受控文件",
        icon: "info",
        link: "受控文件",
      },
    ],
  },
  {
    text: "外链",
    icon: "tool",
    children: [
      {
        text: "ChatGPT SC",
        icon: "creative",
        link: "https://www.aishort.top/",
      },
    ],
  },
  {
    text: "Contact",
    icon: "advance",
    children: [
      {
        text: "微信",
        icon: "wechat",
        link: "https://cdn.jsdelivr.net/gh/luckyoubest2/Bolg-IMG/671685350854_.pic.jpg",
      },
      { text: "Email", icon: "alias", link: "mailto:aisibi2b@163.com" },
    ],
  },
]);
