export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ed4db6c7668343c93c1db10',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-new-studio',
                  apiId: '038ce336-bffe-473a-9565-8b655fe41897'
                },
                {
                  buildHookId: '5ed4db6c1c8448e3d3327981',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-new',
                  apiId: '48d11afe-3313-44dc-9a0f-96d5f3e8b7a3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LauraAnnabel89/sanity-gridsome-blog-new',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-new.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
