
module.exports = {
  title: '基础硬知识',
  base: '/DataStructure/', // 设置站点根目录
  description: '飘飘乎如遗世独立 羽化而登仙',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/pkq.jpeg'
      } 
    ]
  ],
  themeConfig: {
    editLinkText: '在 GitHub 上编辑此页',
    nav: [
      { 
        text: '数据结构与算法',
        items: [
          {
            text: '排序算法',
            link: '/Data/DataStructure/sort/'
          }
        ]
      },
      { 
        text: '设计模式',
        items: [
          {
            text: '设计模式',
            link: '/Data/desginPatter/'
          }
        ]
      },
      { 
        text: 'LeetCode',
        items: [
          {
            text: 'LeetCode题',
            link: '/Data/LeetCode/'
          }
        ]
      }
    ],
    sidebar: {
      '/Data/DataStructure/sort/': [
        {
          title: '排序算法',
          collapsable: false,
          children: [
            '/Data/DataStructure/sort/',
          ]
        }
      ],
      '/Data/desginPatter/': [
        {
          title: '设计模式',
          collapsable: false,
          children: [
            '/Data/desginPatter/',
          ]
        }
      ],
      '/Data/LeetCode/': [
        {
          title: 'LeetCode',
          collapsable: false,
          children: [
            '/Data/LeetCode/',
          ]
        }
      ]
    },
    repo: 'facebook201/DataStructure', // github 地址
    docsRepo: 'facebook201/DataStructure',
    docsDir: 'docs',
    editLinks: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  }
};




