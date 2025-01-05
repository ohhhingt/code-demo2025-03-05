import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/code-demo/',    // 正确设置
  // 暂时不理死链接
  ignoreDeadLinks: true,
  // 浏览器地址栏的左边图标(设置了code-demo后 这里要设置 但是header区那个不用)
  head: [["link", {rel: "icon",href: "/code-demo/collect/images/小图标.svg"}]
  ],
  title: "编程知识整理项目",
  description: "A VitePress Site",
  themeConfig: {
    // 下面这两个out.. 设置右侧标题链接 点击可以快速跳转
    outlineTitle: "目录",
    // 默认只会生成2级标题 这里设置后会生成2~6级标题链接
    outline: [2, 6],
    // 设置header左侧logo
    logo: '/collect/images/小图标.svg',
    // 导航栏 下弹框
    nav: [
      // 导航栏名称 推荐写一级文件夹名称 
      {
        text: '家',
        items: [
          {
            text: '首页',
            link: '/'
          },
          {
            text: 'html+css',
            link: '/heima/01-html+css/know.md'
          },
          {
            text: '移动Web',
            link: '/heima/02-移动Web/know.md'
          },
          {
            text: 'javascript',
            link: '/heima/03-javascript/know.md'
          },
          {
            text: 'Vue',
            link: '/heima/04-Vue/know.md'
          }
        ],
      }
    ],

    // 徒手写的侧边栏 这种写法会把所有的md文件列出来 无论你位于多深的层级
    // 相对于(目录大全) 可以看到所有的md文件 这是第一种并排罗列所有text和link的结果
    // ★第二种就是嵌套items:[](最多嵌套六层) 通过嵌套层级结构更加的清晰
    // 此时使用嵌套层级还有另一个好处就是不用显示images文件夹了 这样图片文件夹就可以隐藏起来了
    // 网址:https://vitepress.dev/zh/reference/default-theme-sidebar

    sidebar: [
      {
        text: 'collect',
        items: [
          {
            text: 'programming',
            items: [
              { text: '编程学习方法总结', link: '/collect/programming/编程学习方法总结.md' },
              { text: '编程技术问题', link: '/collect/programming/编程技术问题.md' },
              { text: '目前还要干的事情', link: '/collect/programming/目前还要干的事情.md' }
            ]
          },
          {
            text: 'vscode', items: [
              { text: 'know', link: '/collect/vscode/know.md' }
            ]
          },
          {
            text: 'vitepress', items: [
              { text: 'know', link: '/collect/vitepress/know.md' }
            ]
          },
          {
            text: 'java',
            items: [
              { text: 'java项目', link: '/collect/java/java项目.md' }
            ]
          },
          {
            text: 'ui',
            items: [
              { text: 'ui', link: '/collect/ui/day01.md' }
            ]
          }

        ],
        collapsed: true
      },
      {
        text: 'heima',
        items: [
          // 01-html+css嵌套层级 展示
          {
            text: '01-html+css',
            items: [
               // 外层文件
              { text: '目录', link: '/heima/01-html+css/目录.md' },
              { text: '技术总结', link: '/heima/01-html+css/know.md' },
              { text: 'B站项目', link: '/heima/01-html+css/B站项目.md' },
              { text: 'css快捷键总结', link: '/heima/01-html+css/css快捷键总结.md' },
              { text: '课md文件', items: [
                { text: '06-作业', link: '/heima/01-html+css/课md文件/6/day06--学成在线.md' },
                { text: '07-作业', link: '/heima/01-html+css/课md文件/7/day07--学成在线.md' },
                { text: '08-作业', link: '/heima/01-html+css/课md文件/8/day08-CSS高级.md' },
                { text: '09-作业', link: '/heima/01-html+css/课md文件/9/day09-小兔鲜儿.md' },
                { text: '10-作业', link: '/heima/01-html+css/课md文件/10/day10-小兔鲜儿.md' },
              ] }
            ],
            collapsed: true
          },

          // 02-移动Web
          { 
            text: '02-移动Web', 
            items: [
              { text: '目录', link: '/heima/02-移动Web/know.md'},
              { text: '看视频的知识', link: '/heima/02-移动Web/看视频的知识.md'},
              { text: '作业文件夹', items:[
                { text: '01-作业', link: '/heima/02-移动Web/课md文件/1/移动Web第一天.md'},
                { text: '02-作业', link: '/heima/02-移动Web/课md文件/2/移动Web第二天.md'},
                { text: '03-作业', link: '/heima/02-移动Web/课md文件/3/移动Web第三天.md'},
                { text: '04-作业', link: '/heima/02-移动Web/课md文件/4/移动Web第四天.md'},
                { text: '05-作业', link: '/heima/02-移动Web/课md文件/5/移动Web第五天.md'},
              ]},
            ],
            collapsed: true
          },

          // 03-javascript
          {
            text: '03-javascript',
            items: [
              // 外层文件
              { text: '目录', link: '/heima/03-javascript/目录.md'},
              { text: 'know', link: '/heima/03-javascript/know.md' },
              { text: '常见bug收集', link: '/heima/03-javascript/常见bug收集.md' },
              {
                // 03-javascript/知识
                text: '知识',
                  items: [
                    { text: 'js基础', link: '/heima/03-javascript/知识/js基础.md' },
                    { text: 'WebApi', link: '/heima/03-javascript/知识/WebApi.md' },
                    { text: 'JS进阶', link: '/heima/03-javascript/知识/JS进阶.md' },
                    { text: 'JS功能模块', link: '/heima/03-javascript/知识/JS功能模块.md' },
                    { text: 'AJAX', link: '/heima/03-javascript/知识/AJAX.md' },
                    { text: 'node', link: '/heima/03-javascript/知识/node.md' },
                    { text: 'Webpack', link: '/heima/03-javascript/知识/Webpack.md' }
                  ],
                collapsed: true
              },
              {
                text: '课md文件',
                  items:[
                    // js基础
                    {
                      text: '01-js基础', items: [
                        { text: 'day01', link: '/heima/03-javascript/课md文件/01-js基础/js基础第一天.md' },
                        { text: 'day02', link: '/heima/03-javascript/课md文件/01-js基础/js基础第二天.md' },
                        { text: 'day03', link: '/heima/03-javascript/课md文件/01-js基础/js基础第三天.md' },
                        { text: 'day04', link: '/heima/03-javascript/课md文件/01-js基础/js基础第四天.md' },
                        { text: 'day05', link: '/heima/03-javascript/课md文件/01-js基础/js基础第五天.md' },
                      ],
                      collapsed: true
                    },
                    // WebApi
                    {
                      text: '02-WebApi', items: [
                        { text: 'day01', link: '/heima/03-javascript/课md文件/02-WebApi/01-main-README.md' },
                        { text: '01-作业', link: '/heima/03-javascript/课md文件/02-WebApi/01-work-作业.md' },
                        { text: 'day02', link: '/heima/03-javascript/课md文件/02-WebApi/02-main-README.md' },
                        { text: '02-作业', link: '/heima/03-javascript/课md文件/02-WebApi/02-work-作业.md' },
                        { text: 'day03', link: '/heima/03-javascript/课md文件/02-WebApi/03-main-README.md' },
                        { text: '03-作业', link: '/heima/03-javascript/课md文件/02-WebApi/03-work-作业.md' },
                        { text: 'day04', link: '/heima/03-javascript/课md文件/02-WebApi/04-main-README.md' },
                        { text: '04-作业', link: '/heima/03-javascript/课md文件/02-WebApi/04-work-作业.md' },
                        { text: 'day05', link: '/heima/03-javascript/课md文件/02-WebApi/05-main-README.md' },
                        { text: '05-作业', link: '/heima/03-javascript/课md文件/02-WebApi/05-work-作业.md' },
                        { text: 'day06', link: '/heima/03-javascript/课md文件/02-WebApi/06-main-README.md' },
                        { text: '06-作业', link: '/heima/03-javascript/课md文件/02-WebApi/06-work-作业.md' },
                        { text: '06-实战文档', link: '/heima/03-javascript/课md文件/02-WebApi/06-actual-combat个人实战文档.md' }
                      ],
                      collapsed: true
                    },
                    // js进阶
                    {
                      text: '03-js进阶', items: [
                        { text: 'day01', link: '/heima/03-javascript/课md文件/03-js进阶/01-main-day01.md' },
                        { text: '01-作业', link: '/heima/03-javascript/课md文件/03-js进阶/01-work-作业.md' },
                        { text: 'day02', link: '/heima/03-javascript/课md文件/03-js进阶/02-main-day02.md' },
                        { text: '02-作业', link: '/heima/03-javascript/课md文件/03-js进阶/02-work-作业.md' },
                        { text: 'day03', link: '/heima/03-javascript/课md文件/03-js进阶/03-main-day03.md' },
                        { text: '03-作业', link: '/heima/03-javascript/课md文件/03-js进阶/03-work-作业.md' },
                        { text: 'day04', link: '/heima/03-javascript/课md文件/03-js进阶/04-main-day04.md' },
                        { text: '04-作业', link: '/heima/03-javascript/课md文件/03-js进阶/04-work-作业.md' },
                      ],
                      collapsed: true
                    },
                    // AJAX
                    {
                      text: '04-AJAX', items: [
                        { text: 'day01', link: '/heima/03-javascript/课md文件/04-AJAX/Day01-Main-AJAX入门.md' },
                        { text: '01-作业', link: '/heima/03-javascript/课md文件/04-AJAX/Day01-Work-作业要求.md' },
                        { text: 'day02', link: '/heima/03-javascript/课md文件/04-AJAX/Day02-Main-AJAX综合案例.md' },
                        { text: '02-作业', link: '/heima/03-javascript/课md文件/04-AJAX/Day02-Work-作业要求.md' },
                        { text: 'day03', link: '/heima/03-javascript/课md文件/04-AJAX/Day03-Main-AJAX原理.md' },
                        { text: '03-作业', link: '/heima/03-javascript/课md文件/04-AJAX/Day03-Work-作业要求.md' },
                        { text: 'day04', link: '/heima/03-javascript/课md文件/04-AJAX/Day04-Main-AJAX进阶.md' },
                        { text: '04-作业', link: '/heima/03-javascript/课md文件/04-AJAX/Day04-Work-作业要求.md' }
                      ],
                      collapsed: true
                    },
                    // Node
                    {
                      text: '05-Node', items: [
                        { text: 'day01', link: '/heima/03-javascript/课md文件/05-Node/Day01-Main-Node.js入门.md' },
                        { text: '01-作业', link: '/heima/03-javascript/课md文件/05-Node/Day01-Work-作业要求.md' },
                        { text: 'day02', link: '/heima/03-javascript/课md文件/05-Node/Day02-Main-Node.js模块化.md' },
                        { text: '02-作业', link: '/heima/03-javascript/课md文件/05-Node/Day02-Work-作业要求.md' },
                        { text: 'day03', link: '/heima/03-javascript/课md文件/05-Node/Day03-Main-Webpack模块打包工具.md' },
                        { text: '03-作业', link: '/heima/03-javascript/课md文件/05-Node/Day03-Work-作业要求.md' },
                      ],
                      collapsed: true
                    }
                  ],
                collapsed: true
              }
              // 更多模块
            ],
            collapsed: true
          },

          // 04-Vue
          {
            text: '04-Vue', items: [
              { text: 'know.md', link: '/heima/04-Vue/know.md'},
              { text: 'day01', link: '/heima/04-Vue/课md文件/Day01-Main.md'},
              { text: '01-作业', link: '/heima/04-Vue/课md文件/Day01-Work.md'},
              { text: 'day02', link: '/heima/04-Vue/课md文件/Day02-Main.md'},
              { text: '02-作业', link: '/heima/04-Vue/课md文件/Day02-Work.md'},
              { text: 'day03', link: '/heima/04-Vue/课md文件/Day03-Main.md'},
              { text: '03-作业', link: '/heima/04-Vue/课md文件/Day03-Work.md'},
              { text: 'day04', link: '/heima/04-Vue/课md文件/Day04-Main.md'},
              { text: '04-作业', link: '/heima/04-Vue/课md文件/Day04-Work.md'},
              { text: 'day05', link: '/heima/04-Vue/课md文件/Day05-Main.md'},
              { text: '05-作业', link: '/heima/04-Vue/课md文件/Day05-Work.md'},
              { text: 'day06', link: '/heima/04-Vue/课md文件/Day06-Main.md'},
              { text: 'day07', link: '/heima/04-Vue/课md文件/Day07-Main-面经H5端-Vant.md'},
            ],
            collapsed: true
          }
          
        ]
      }
    ],
    // 首页右上角的 小猫 点击后跳转去 我的github
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
