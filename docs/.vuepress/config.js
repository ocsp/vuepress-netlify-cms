module.exports = {
  title: 'Kashima Press',
  description: 'Expression of ideas.',
    head: [
    ['link', { rel: 'icon', href: '//api.amanohina.com/favicon.ico' }]
  ]
}
themeConfig: {
    docsDir: 'docs',
    repo: 'ocsp/vuepress-netlify-cms',
    sidebar: [
      '/',
      '/welcome',
      '/test'
    ],
    nav: [
      {
        text: 'Admin',
        link: '/admin/#/',
      }
    ]
  }
}
