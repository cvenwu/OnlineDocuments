import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'


export default defineUserConfig({
  "base": "/OnlineDocuments/"
  // 请不要忘记设置默认语言
  lang: 'zh-CN',
  theme: plumeTheme({
    home: "/",
    social: [
        { icon: 'github', link: 'https://github.com/cvenwu' }
    ],
    // footer: { message: "2022"; copyright: "yirufeng" }
    avatar: {
        url: 'https://gcore.jsdelivr.net/gh/sivanWu0222/ImageHosting@master/uPic/IMG_1966.JPG',
        name: 'yirufeng',
        description: 'No Pains, No Gains',
        circle: true, 
    },
    notes: {
        dir: '/notes/', // 声明所有笔记的目录
        link: '/', // 声明所有笔记默认的链接前缀， 默认为 '/'
        notes: [
          {
            dir: 'redis', // 声明笔记的目录，相对于 `notes.dir`
            link: '/redis/', // 声明笔记的链接前缀
            sidebar: [ // 配置侧边栏
              {
                text: '数据结构',
                icon: '', // 侧边栏图标
                items: ['foo'] // 简化写法，主题会自动补全为 `foo.md`
              },
              {
                text: '内存系列',
                icon: '', // 侧边栏图标
                items: ['foo'] // 简化写法，主题会自动补全为 `foo.md`
              }
            ]
          },
          {
            dir: 'rust',
            link: '/rust/',
            sidebar: [
              { text: '简介', items: ['foo'] }
            ]
          }
        ]
    },
    navbar: [
        {
            text: '首页',
            link: '/',
            icon: 'material-symbols:home-outline',
            activeMatch: '^/(blog|article)/',
        },
        {
            text: '博客',
            link: '/blog/',
            icon: 'material-symbols:article-outline'
        },
        {
          text: '数据结构与算法',
          icon: 'material-symbols:books-outline',
          items: [
              { text: '数组', link: '/notes/array/', icon: '' },
              { text: '链表', link: '/notes/array/', icon: '' },
              { text: '栈', link: '/notes/stack/', icon: '' },
              // icon-park-outline:data
              { text: '队列', link: '/notes/queue/', icon: '' },
              { text: '图', link: '/notes/graph/', icon: '' },
              { text: '字符串', link: '/notes/string/', icon: '' },
              { text: '算法', link: '/notes/algo/', icon: '' },
          ],
        },
        {
            text: '基础',
            icon: 'material-symbols:bookmarks-outline',
            items: [
                { text: '计算机网络', link: '/notes/network/', icon: '' },
                { text: '操作系统', link: '/notes/os/', icon: '' },
                // icon-park-outline:data
                { text: 'Mysql', link: '/notes/mysql/', icon: '' },
                { text: 'Redis', link: '/notes/redis/', icon: '' },
                { text: 'Linux', link: '/notes/linux/', icon: '' },
                { text: 'Go语言', link: '/notes/go/', icon: '' },
                { text: 'Kafka', link: '/notes/kafka/', icon: '' },
                { text: 'Nginx', link: '/notes/nginx/', icon: '' },
            ],
        },
        {
            text: '软技能',
            icon: 'icon-park-outline:more-three',
            items: [
                { text: '系统设计', link: '/notes/design/', icon: 'p' },
                { text: '分布式', link: '/notes/distributed/', icon: '' },
                { text: '面试技巧', link: '/notes/tricks/', icon: '' },
                { text: '项目', link: '/notes/projects/', icon: '' },
                { text: '设计模式', link: '/notes/pattern/', icon: '' },
            ],
        },
        {
            text: '归档',
            icon: 'material-symbols:archive-outline',
            items: [
                // icon-park-outline:notebook-and-pen
                { text: '未整理面试题', link: '/notes/archive/', icon: ''},
            ],
        }
        // {
        //     text: '在线文档',
        //     icon: 'material-symbols:article-outline',
        //     items: [
                
                
                
        //     ]
        // }
    ],
    shiki: {
      theme: { light: 'vitesse-light', dark: 'vitesse-dark' },
    },
    markdownEnhance: {
      hint: true, // 提示容器
      codetabs: true, // 代码组
      tabs: true, // 选项卡
      align: true, // 对齐容器
      mark: true, // 标记语法
      tasklist: true, // 任务列表语法
      attrs: true, // 属性语法
      sup: true, // 上标语法
      sub: true, // 下标语法
      alert: true, // GFM 通知语法
      footnote: true, // 注脚语法
      katex: true, // 数学公式

      // 以下可选项在 主题中默认不启用，
      // 请在主题中自行配置
      // include: true, // Markdown 导入支持
      figure: true, // 启用图片 Figure 支持
      imgLazyload: true, // 使用原生方式懒加载页面图片
      imgMark: true, // 浅色/深色 图片标记
      imgSize: true, // 图片尺寸支持
      // obsidianImgSize: true, // obsidian 图片尺寸支持
      mathjax: true, //  Math Jax 数学公式 语法支持
      chart: true, // 图表支持
      echarts: true, // ECharts 图表支持
      flowchart: true, // 流程图支持
      markmap: true, // Markmap 图表支持
      stylize: true, // 对行内语法进行样式化以创建代码片段
      playground: true, // 交互演示
      kotlinPlayground: true, // Kotlin 交互演示
      vuePlayground: true, // Vue 交互演示
      sandpack: true, // sandpack 交互演示
      demo: true, // 代码案例
      // revealJs: true, // 幻灯片支持
    },
    hostname: 'https://yirufeng.top',
    baiduTongji: {
      key: '8e9892900530dea5c0ec835665c2f0dc'
    }
  }),
  bundler: viteBundler(),
})

