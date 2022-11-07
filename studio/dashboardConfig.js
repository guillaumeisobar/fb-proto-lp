export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '6368eb763eb08e19671dd78a',
                  title: 'Sanity Studio',
                  name: 'fb-proto-lp-studio',
                  apiId: 'f8922566-5b4e-4217-8f28-6a5d7e8a3897'
                },
                {
                  buildHookId: '6368eb7626363217265dae93',
                  title: 'Landing pages Website',
                  name: 'fb-proto-lp',
                  apiId: '3aa18079-b555-4623-8b41-8d2c9c66f4a1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/guillaumeisobar/fb-proto-lp',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://fb-proto-lp.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
