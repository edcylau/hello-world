import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"

// styling

import blogStyles from './blog.module.scss'

const BlogPage = props => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const blogs = data.allMarkdownRemark.edges

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.blogs}>
        {blogs.map(blog => (
          <li className={blogStyles.blog} key={blog.node.frontmatter.title}>
              <Link to={`/blog/${blog.node.fields.slug}`}>
                <h2>
                    {blog.node.frontmatter.title}
                </h2>
                <p>{blog.node.frontmatter.date}</p>
              </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
