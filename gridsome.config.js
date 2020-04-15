// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Ezras Nashim',
  siteUrl: 'https://www.ezrasnashim.org',
  siteDescription: 'Bridging the gap for women in Emergency Medical Care',

  templates: {
    Post: '/posts/:title',
    Tag: '/tag/:id'
  },


  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    //generating a sitemap for SEO purposes
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        staticUrls: [
          {
            url: "/",
            title: "Bridging the gap for woman in Emergency Medical Care"
          },
          {
            url: "/donate",
            title: "Ezras nashim is expanding across America. We need your donation"
          },
          {
            url: "/About",
            title: "Who are Ezras Nashim, Our mission, Our Goals"
          },
          {
            url: "/volunteer",
            title: "Come and volunteer with Ezras Nashim, there are a number of roles you can fill"
          },
        ]
      }
    }
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
