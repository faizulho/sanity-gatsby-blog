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
                  buildHookId: '5e0c88224b47374675eef6eb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-m6uqgs6b',
                  apiId: 'ed275349-3fa7-4f58-bf92-6cf8dedb3e1d'
                },
                {
                  buildHookId: '5e0c88222040621ddeb2a1d4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-d3asosw9',
                  apiId: '4f2e335c-ba7c-4a11-b3da-164d773dd92d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/faizulho/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-d3asosw9.netlify.com', category: 'apps' }
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
