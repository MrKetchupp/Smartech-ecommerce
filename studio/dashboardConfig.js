export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5e8ebb2c02031661f5daf55b',
                  title: 'Sanity Studio',
                  name: 'Smartech-ecommerce-studio',
                  apiId: '3cfa3faa-5847-4b62-bdfc-f8f5c7455446'
                },
                {
                  buildHookId: '5e8ebb2c5ca10cfa0dc904a3',
                  title: 'Blog Website',
                  name: 'Smartech-ecommerce',
                  apiId: 'e47a8288-87cf-4c1a-9c7e-e3de8ba7a98f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MrKetchupp/Smartech-ecommerce',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://Smartech-ecommerce.netlify.com', category: 'apps'}
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
