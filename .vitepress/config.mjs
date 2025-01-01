import {defineConfig} from 'vitepress'
import {set_sidebar} from "../utils/auto_sidebar.mjs"; // 改成自己的路径(自动侧边栏)


// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 暂时不理死链接
  ignoreDeadLinks: true,
  // 浏览器地址栏的左边图标
  head: [["link", {rel: "icon",href: "/项目图片/小图标.svg"}]
  ],
  title: "编程知识整理项目",
  description: "A VitePress Site",
  base: '/code-demo/',
  themeConfig: {
    // 下面这两个out.. 设置右侧标题链接 点击可以快速跳转
    outlineTitle: "目录",
    // 默认只会生成2级标题 这里设置后会生成2~6级标题链接
    outline: [2, 6],
    // 设置大logo
    logo: '/项目图片/小图标.svg',
    // https://vitepress.dev/reference/default-theme-config

    // 导航栏 下弹框
    nav: [
      // 导航栏名称 推荐写一级文件夹名称 
      {
        text: '家',
        items: [
          // 这里是个特例 下面文件夹中不用写这个也可以 用来跳转回首页的
          {
            text: '首页',
            link: '/'
          },
          // 二级文件夹
          {
            text: '★侧边栏入口★',
            link: '/heima/03-javascript/知识/常用知识夹子.md'
          },
          {
            text: 'vitepress建站知识',
            link: '/vitepress建站知识'
          }
        ],
      },
      // // 一级文件夹
      // {
      //   text: 'heima',
      //   items: [
      //     // 二级文件夹
      //     {
      //       text: '01-html+css',
      //       link: '/heima/01-html+css/'
      //     },
      //     // 二级文件夹
      //     {
      //       text: '02-移动Web',
      //       link: '/heima/02-移动Web/'
      //     },
      //     {
      //       text: '03-javascript',
      //       link: '/heima/03-javascript/'
      //     },
      //   ]
      // },
      // // 一级文件夹
      // {
      //   text: '收集桶',
      //   items: [
      //     // 没有文件夹 直接写名字 其实就是下拉弹出来的盒子名字
      //     {
      //       text: '收集桶',
      //       link: '/收集桶/'
      //     },
      //   ]
      // }
    ],

    // 徒手写的侧边栏 这种写法会把所有的md文件列出来 无论你位于多深的层级
    // 相对于(目录大全) 可以看到所有的md文件 这是第一种并排罗列所有text和link的结果
    // ★第二种就是嵌套items:[](最多嵌套六层) 通过嵌套层级结构更加的清晰
    // 此时使用嵌套层级还有另一个好处就是不用显示images文件夹了 这样图片文件夹就可以隐藏起来了
    // 网址:https://vitepress.dev/zh/reference/default-theme-sidebar

    sidebar: [ 
      {
        text: '收集桶',
        items: [
          {
            text: '编程方法和技术问题',
            items: [
              { text: '编程学习方法总结', link: '/收集桶/编程方法和技术问题/编程学习方法总结.md' },
              { text: '编程技术问题', link: '/收集桶/编程方法和技术问题/编程技术问题.md' },
              { text: '目前还要干的事情', link: '/收集桶/编程方法和技术问题/目前还要干的事情.md' }
            ]
          },
          {
            text: '其他项目',
            items: [
              { text: 'java项目', link: '/收集桶/其他项目/java项目.md' }
            ]
          }
        ]
      },
      {
        text: 'heima',
        items: [
          // vscode的一些小问题记录
          { text: 'vscode的一些小问题记录', link: '/heima/vscode的一些小问题记录.md' },

          // 01-html+css嵌套层级 展示
          {
            text: '01-html+css',
            items: [
               // 外层文件
              { text: '知识', items:[
                { text: '目录', link: '/heima/01-html+css/知识/目录.md' },
                { text: '技术总结', link: '/heima/01-html+css/知识/技术总结.md' },
                { text: 'B站项目', link: '/heima/01-html+css/知识/B站项目.md' },
                { text: 'css快捷键总结', link: '/heima/01-html+css/知识/css快捷键总结.md' },
              ] },
              { text: '作业文件夹', items: [
                { text: '06-作业', link: '/heima/01-html+css/课md文件/6/day06--学成在线.md' },
                { text: '07-作业', link: '/heima/01-html+css/课md文件/7/day07--学成在线.md' },
                { text: '08-作业', link: '/heima/01-html+css/课md文件/8/day08-CSS高级.md' },
                { text: '09-作业', link: '/heima/01-html+css/课md文件/9/day09-小兔鲜儿.md' },
                { text: '10-作业', link: '/heima/01-html+css/课md文件/10/day10-小兔鲜儿.md' },
              ] }
            ]
          },

          // 02-移动Web
          { 
            text: '02-移动Web', 
            items: [
              { text: '知识', items:[
                { text: '目录', link: '/heima/02-移动Web/知识/目录.md'},
                { text: '第二课web', link: '/heima/02-移动Web/知识/第二课web.md'},
              ]},
              { text: '作业文件夹', items:[
                { text: '01-作业', link: '/heima/02-移动Web/课md文件/1/移动Web第一天.md'},
                { text: '02-作业', link: '/heima/02-移动Web/课md文件/2/移动Web第二天.md'},
                { text: '03-作业', link: '/heima/02-移动Web/课md文件/3/移动Web第三天.md'},
                { text: '04-作业', link: '/heima/02-移动Web/课md文件/4/移动Web第四天.md'},
                { text: '05-作业', link: '/heima/02-移动Web/课md文件/5/移动Web第五天.md'},
              ]},
            ]
          },

          // 03-javascript
          {
            text: '03-javascript',
            items: [
              // 外层文件
              { text: '目录', link: '/heima/03-javascript/目录.md'},
              { text: '常见bug收集', link: '/heima/03-javascript/常见bug收集.md' },
              {
                // 03-javascript/知识
                text: '知识',
                    items: [
                      { text: '常用知识夹子', link: '/heima/03-javascript/知识/常用知识夹子.md' },
                      { text: 'js基础', link: '/heima/03-javascript/知识/js基础.md' },
                      { text: 'WebApi', link: '/heima/03-javascript/知识/WebApi.md' },
                      { text: 'JS进阶', link: '/heima/03-javascript/知识/JS进阶.md' },
                      { text: 'JS功能模块', link: '/heima/03-javascript/知识/JS功能模块.md' },
                      { text: 'AJAX', link: '/heima/03-javascript/知识/AJAX.md' },
                      { text: 'node', link: '/heima/03-javascript/知识/node.md' },
                      { text: 'Webpack', link: '/heima/03-javascript/知识/Webpack.md' }
                    ]
              },
              {
                text: '课md文件',
                  items:[
                    {
                      text: '01-js基础', items: [
                        {text: 'js基础第一天', items:[
                          { text: 'day01', link: '/heima/03-javascript/课md文件/01-js基础/js第一天/js基础第一天.md' }
                        ]},
                        {text: 'js基础第二天', items:[
                          { text: 'day02', link: '/heima/03-javascript/课md文件/01-js基础/js第二天/js基础第二天.md' }
                        ]},
                        {text: 'js基础第三天', items:[
                          { text: 'day03', link: '/heima/03-javascript/课md文件/01-js基础/js第三天/js基础第三天.md' }
                        ]},
                        {text: 'js基础第四天', items:[
                          { text: 'day04', link: '/heima/03-javascript/课md文件/01-js基础/js第四天/js基础第四天.md' }
                        ]},
                        {text: 'js基础第五天', items:[
                          { text: 'day05', link: '/heima/03-javascript/课md文件/01-js基础/js第五天/js基础第五天.md' }
                        ]}
                      ],
                    },
                    {
                      text: '02-WebApi', items: [
                        {text: 'WebApi-day01', items:[
                          // 第五级 层级 再下去是第六级 要注意保留使用 因为第七级没有显示了
                          { text: 'day01', link: '/heima/03-javascript/课md文件/02-WebApi/day01/README.md' },
                          { text: '01-作业', link: '/heima/03-javascript/课md文件/02-WebApi/01-作业/作业.md' } 
                        ]},
                        {text: 'WebApi-day02', items:[
                          { text: 'day02', link: '/heima/03-javascript/课md文件/02-WebApi/day02/README.md' },
                          { text: '02-作业', link: '/heima/03-javascript/课md文件/02-WebApi/02-作业/作业.md' } 
                        ]},
                        {text: 'WebApi-day03', items:[
                          { text: 'day03', link: '/heima/03-javascript/课md文件/02-WebApi/day03/README.md' },
                          { text: '03-作业', link: '/heima/03-javascript/课md文件/02-WebApi/03-作业/作业.md' } 
                        ]},
                        {text: 'WebApi-day04', items:[
                          { text: 'day04', link: '/heima/03-javascript/课md文件/02-WebApi/day04/README.md' },
                          { text: '04-作业', link: '/heima/03-javascript/课md文件/02-WebApi/04-作业/作业.md' }
                        ]},
                        {text: 'WebApi-day05', items:[
                          { text: 'day05', link: '/heima/03-javascript/课md文件/02-WebApi/day05/README.md' },
                          { text: '05-作业', link: '/heima/03-javascript/课md文件/02-WebApi/05-作业/作业.md' }
                        ]},
                        {text: 'WebApi-day06', items:[
                          { text: 'day06', link: '/heima/03-javascript/课md文件/02-WebApi/day06/README.md' },
                          { text: '06-作业', link: '/heima/03-javascript/课md文件/02-WebApi/06-作业/作业.md' },
                          { text: '06-实战文档', link: '/heima/03-javascript/课md文件/02-WebApi/06-实战文档/个人实战文档.md' }
                        ]},
                      ]
                    },
                    {
                      text: '03-js进阶', items: [
                        {text: 'js进阶-day01', items:[
                          { text: 'day01', link: '/heima/03-javascript/课md文件/03-js进阶/day01/day01.md' },
                          { text: '01-作业', link: '/heima/03-javascript/课md文件/03-js进阶/01-作业/作业.md' }
                        ]},
                        {text: 'js进阶-day02', items:[
                          { text: 'day02', link: '/heima/03-javascript/课md文件/03-js进阶/day02/day02.md' },
                          { text: '02-作业', link: '/heima/03-javascript/课md文件/03-js进阶/02-作业/作业.md' }
                        ]},
                        {text: 'js进阶-day03', items:[
                          { text: 'day03', link: '/heima/03-javascript/课md文件/03-js进阶/day03/day03.md' },
                          { text: '03-作业', link: '/heima/03-javascript/课md文件/03-js进阶/03-作业/作业.md' }
                        ]},
                        {text: 'js进阶-day04', items:[
                          { text: 'day04', link: '/heima/03-javascript/课md文件/03-js进阶/day04/day04.md' },
                          { text: '04-作业', link: '/heima/03-javascript/课md文件/03-js进阶/04-作业/作业.md' }
                        ]}
                      ]
                    },
                    {
                      text: '04-AJAX', items: [
                        {text: 'AJAX-day01', items:[
                          { text: 'day01', link: '/heima/03-javascript/课md文件/04-AJAX/day01/Day01_AJAX入门.md' },
                          { text: '01-作业', link: '/heima/03-javascript/课md文件/04-AJAX/01-作业/作业要求.md' },
                          { text: '输入url到网址发生了', link: '/heima/03-javascript/课md文件/04-AJAX/01-作业/输入url到网址发生了.md' }
                        ]},
                        {text: 'AJAX-day02', items:[
                          { text: 'day02', link: '/heima/03-javascript/课md文件/04-AJAX/day02/Day02_AJAX综合案例.md' },
                          { text: '02-作业', link: '/heima/03-javascript/课md文件/04-AJAX/02-作业/作业要求.md' }
                        ]},
                        {text: 'AJAX-day03', items:[
                          { text: 'day03', link: '/heima/03-javascript/课md文件/04-AJAX/day03/Day03_AJAX原理.md' },
                          { text: '03-作业', link: '/heima/03-javascript/课md文件/04-AJAX/03-作业/作业要求.md' }
                        ]},
                        {text: 'AJAX-day04', items:[
                          { text: 'day04', link: '/heima/03-javascript/课md文件/04-AJAX/day04/Day04_AJAX进阶.md' },
                          { text: '04-作业', link: '/heima/03-javascript/课md文件/04-AJAX/04-作业/作业要求.md' }
                        ]}
                      ]
                    },
                    {
                      text: '05-Node', items: [
                        {text: 'Node-day01', items:[
                          { text: 'day01', link: '/heima/03-javascript/课md文件/05-Node/day01/Day01_Node.js入门.md' },
                          { text: '01-作业', link: '/heima/03-javascript/课md文件/05-Node/01-作业/作业要求.md' }
                        ]},
                        {text: 'Node-day02', items:[
                          { text: 'day02', link: '/heima/03-javascript/课md文件/05-Node/day02/Day02_Node.js模块化.md' },
                          { text: '02-作业', link: '/heima/03-javascript/课md文件/05-Node/02-作业/作业要求.md' }
                        ]},
                        {text: 'Node-day03', items:[
                          { text: 'day03', link: '/heima/03-javascript/课md文件/05-Node/day03/Day03_Webpack模块打包工具.md' },
                          { text: '03-作业', link: '/heima/03-javascript/课md文件/05-Node/03-作业/作业要求.md' }
                        ]}
                      ]
                    }
                  ]
              }
              // 更多模块
            ]
          },

          // 04-Vue
          {
            text: '04-Vue', items: [
              { text: '知识', items:[
                { text: 'index.md', link: '/heima/04-Vue/知识/index.md'},
              ]},
              { text: '课md文件', items:[
                { text: 'Vue-01', items: [
                  { text: 'day01', link: '/heima/04-Vue/课md文件/1/day01.md'},
                  { text: '01-作业', link: '/heima/04-Vue/课md文件/1/作业题-day01.md'},
                ]},
                { text: 'Vue-02', items: [
                  { text: 'day02', link: '/heima/04-Vue/课md文件/2/day02.md'},
                  { text: '02-作业', link: '/heima/04-Vue/课md文件/2/作业题-day02.md'},
                ]},
                { text: 'Vue-03', items: [
                  { text: 'day03', link: '/heima/04-Vue/课md文件/3/day03.md'},
                  { text: '03-作业', link: '/heima/04-Vue/课md文件/3/作业题-day03.md'},
                ]},
                { text: 'Vue-04', items: [
                  { text: 'day04', link: '/heima/04-Vue/课md文件/4/day04.md'},
                  { text: '04-作业', link: '/heima/04-Vue/课md文件/4/作业题-day04.md'},
                ]},
                { text: 'Vue-05', items: [
                  { text: 'day05', link: '/heima/04-Vue/课md文件/5/day05.md'},
                  { text: '05-作业', link: '/heima/04-Vue/课md文件/5/作业题-day05.md'},
                ]},
                { text: 'day06', link: '/heima/04-Vue/课md文件/6/day06.md'},
                { text: 'day07', link: '/heima/04-Vue/课md文件/7/day07-面经H5端-Vant.md'},
              ]},
            ]
          }
          
        ]
      }
    ],

    // 下面这个写一个文件夹路径 自动生成侧边栏

    // 现在引入自动生成侧边栏的脚本 只需要写入文件夹路径 自动生成侧边栏
    // sidebar: { 
    //   // 书写格式: /一级文件夹/
    //   "/收集桶/": set_sidebar("收集桶/"),
    
    //   // 书写格式: /一级文件夹/二级文件夹/
    //   "/heima/01-html+css/": set_sidebar("heima/01-html+css/"),
    //   "/heima/02-移动Web/": set_sidebar("heima/02-移动Web/"),
    //   "/heima/03-javascript/": set_sidebar("heima/03-javascript/"),
    // },

    // sidebar: false, // 关闭左边的侧边栏
    // aside: "left", // 设置右侧侧边栏在左侧显示

    // 首页右上角的 小猫 点击后跳转去作者的github
    socialLinks: [{
      icon: 'github',
      link: 'https://github.com/ohhhingt'
    }],

    // 首页底部的话
    footer: {
      copyright: "Copyright@ 2023-present My Name"
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
