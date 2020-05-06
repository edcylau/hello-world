import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'


export default class index extends Component {
  render() {
    return (
      <Layout>
        <h1>Hi I'm Edmund</h1>
        <h2>A fullstack developer Living in Shanghai.</h2>
        <p>
          Need a developer? <Link to="/contact">Contact me</Link>
        </p>
        <p> My blog is right <Link to="/blog">Here</Link></p>
      </Layout>
    )
  }
}
