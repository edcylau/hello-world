import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import Head from '../components/head'


export default class index extends Component {
  render() {
    return (
      <Layout>
        <Head title="Home" />
        <h1>Hi I'm Edmund</h1>
        <h2>A fullstack developer Living in Shanghai.</h2>
        <p>
          Need a developer? <Link to="/contact">Contact me</Link>
        </p>
      </Layout>
    )
  }
}
