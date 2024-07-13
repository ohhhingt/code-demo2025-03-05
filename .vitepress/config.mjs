import { defineConfig } from 'vitepress'
import { set_sidebar } from "../utils/auto_sidebar.mjs";	// 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 浏览器地址栏的左边图标
  head: [["link", { rel: "icon", href: "/圣诞礼物.png" }]],
  title: "我的一点帅气项目",
  description: "A VitePress Site",
  themeConfig: {
    // 下面这两个out.. 设置右侧标题链接 点击可以快速跳转
    outlineTitle:"目录",
    // 默认只会生成2级标题 这里设置后会生成2~6级标题链接
    outline:[2, 6],

    // 设置大logo
    logo:'/圣诞雪帽.png',
    // https://vitepress.dev/reference/default-theme-config

    // 设置导航栏 网页上边的一些栏目
    nav: [
      { text: '家', 
        // 导航栏 下弹框
        items:[
          {text:'首页', link:'/'},
          {text:'markdown示例', link:'/markdown-examples'},
        ],
      },
      { text: 'markdown示例', link: '/markdown-examples' },
      { text: '自动生成侧边栏', link: '/front-end/react/' },
      { text: '自动生成侧边栏2', link: '/backend/rabbitmq/' },
      { text: '两边栏演示', link: '两边栏演示.md' },
    ],

    // 徒手写的侧边栏
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown 演示', link: '/markdown-examples' },
    //       { text: 'Runtime API 演示', link: '/api-examples' }
    //     ]
    //   },
    //   {
    //     text: 'Examples2',
    //     items: [
    //       { text: 'Markdown 演示', link: '/markdown-examples' },
    //       { text: 'Runtime API 演示', link: '/api-examples' }
    //     ]
    //   }
    // ],

    // 下面这个写一个文件夹路径 自动生成侧边栏
    
    // 现在引入自动生成侧边栏的脚本 只需要写入文件夹路径 自动生成侧边栏
    // sidebar: { 
    //   "/front-end/react": set_sidebar("front-end/react"),
    //   "/backend/rabbitmq": set_sidebar("backend/rabbitmq"),
    // },

    sidebar: false, // 关闭左边的侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示

    // 首页右上角的 小猫 点击后跳转去作者的github
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AZCodingAccount' }
    ],
    
    // 首页底部的话
    footer:{
      copyright:"Copyright@ 2023-present My Name"
    },

    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    
  }   
})
