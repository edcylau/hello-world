// node.js api path
const path = require('path');

// generate slug and dynamically generate new post page
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
