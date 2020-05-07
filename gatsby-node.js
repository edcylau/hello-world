// node.js api path
const path = require('path');

// generate slug
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  // filter out the json
  if (node.internal.type === 'MarkdownRemark') {

    const slug = path.basename(`${node.fileAbsolutePath}`, '.md')
    // console.log(JSON.stringify(node, undefined, 4))
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
   }
}

// and dynamically generate new post page
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // 1. Get path to template
  const blogTemplate = path.resolve('./src/templates/blog.js')

  // 2. Get markdown data
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // 3. create new pages
  res.data.allMarkdownRemark.edges.forEach((edge)=> {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug
      }
    })
  })


}
