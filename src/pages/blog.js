import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"

// styling

import blogStyles from './blog.module.scss'

const BlogPage = props => {
  // MARK DOWN
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // CONTENTFUL API
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields: publishedDate,
          order:DESC
        }
      ) {
        edges {
          node {
            title
            publishedDate(formatString: "Do MMMM, YYYY" )
            slug
          }
        }
      }
    }
  `)

  // const blogs = data.allMarkdownRemark.edges
  const blogs = data.allContentfulBlogPost.edges
  console.log("@@@@",blogs)
  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.blogs}>
        {blogs.map(blog => (
          <li className={blogStyles.blog} key={blog.node.title}>
              <Link to={`/blog/${blog.node.slug}`}>
                <h2>
                    {blog.node.title}
                </h2>
                <p>{blog.node.publishedDate}</p>
              </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
