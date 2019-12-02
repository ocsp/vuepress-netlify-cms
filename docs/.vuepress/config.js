module.exports = {
  title: 'Kashima Press',
  description: 'Netlify + VuePress',
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
