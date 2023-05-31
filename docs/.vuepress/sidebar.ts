import { sidebar } from "vuepress-theme-hope";

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default sidebar([
  "/DailyRoutine",
  {
    text: "🗞️博客文章",
    prefix: "/_posts/",
    link: "/posts/",
    collapsible: true,
    children: "structure",
  },  
  {
    text: "📖 读书笔记",
    prefix: "/reading/",
    link: "/reading/",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🏄 网络冲浪",
    icon: "",
    prefix: "/apps/",
    link: "/apps/",
    collapsible: true,
    children: "structure",
  },
  {
    text: "📝 评测文章",
    icon: "",
    prefix: "/evaluation/",
    link: "/evaluation/",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🛖 生活记录",
    icon: "",
    prefix: "/life/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🙈 受控文章",
    icon: "",
    prefix: "/Control/",
    link: "/Control/",
    collapsible: true,
    children: "structure",
  },
]);
