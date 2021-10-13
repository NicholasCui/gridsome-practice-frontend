// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'My Gride Practice',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://192.144.227.227:1337/',
        queryLimit: 1000,
        contentTypes: ['projects', 'category']
      }
    }
  ],
  templates: {
    StrapiProjects: [
      {
        path: '/project/:id',
        component: './src/templates/Project.vue'
      }
    ]
  }
}
