const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return new Promise((resolve, reject) => {
        graphql(`
      {
        project: allContentfulProject {
          nodes {
            slug
          }
        }
      }
    `).then(({ errors, data }) => {
            if (errors) {
                reject(errors)
            }

            if (data && data.project) {
                const component = path.resolve("./src/templates/project-item.jsx")
                data.project.nodes.map(({ slug }) => {
                    createPage({
                        path: `/${slug}`,
                        component,
                        context: { slug },
                    })
                })
            }

            resolve()
        })
    })
}
