export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e67da5b812936017906e599',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-yqub552e',
                  apiId: 'de898f20-103b-4ae6-8f1e-400bfa3dc179'
                },
                {
                  buildHookId: '5e67da5b97b95b019f9265e5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-mvit8ocx',
                  apiId: '3ac0ea1c-d734-4e3d-b883-a75cc2c5262f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ivanrakovic/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-mvit8ocx.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
