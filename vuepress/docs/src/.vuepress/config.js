const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Altice labs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'About',
        link: '/about/'
      },
      {
        text: 'Info',
        link: '/info/'
      },
      // {
      //   text: 'Info',
      //   items: [
      //     { text: 'all info', link: '/info/' },
      //     {
      //       text: 'By Topic',
      //       items: [
      //         { text: 'location', link: '/info/more-info/locatio.md' },
      //         { text: 'xd ', link: '\info\README.md' },
      //         { text: 'specification', link: '/info/more-info/specification.md' },
      //       ],
      //     },
      //   ],
      // },
      {
        text: 'Serviços',
        link: '/servicos/'
      },
      {
        text: 'Posts',
        items: [
          { text: 'All Posts', link: '/posts/' },
          {
            text: 'By Topic',
            items: [
              { text: 'LeetCode', link: '/topics/LeetCode/README.md' },
              { text: 'Node.js', link: '/topics/Node.js/' },
              { text: 'VuePress', link: '/topics/VuePress/' },
            ],
          },
        ],
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',   
            'using-vue'
          ]
        }
      ],
      '/info/': [
        {
          title: 'Info',
          collapsable: false,
          children: [
            '',
            'locatio',
            'specification' 
          ]
        }
      ],
      '/servicos/': [
        {
          title: 'Servicos',
          collapsable: false,
          children: [
            '',
            'MNMU_PSCSEC+-+Servicos+-+Servicos+-+Menu+IVR+-+Caracteristicas'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
