import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'




const AboutPage = props => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>I am currently looking for freelance job.</p>
      <p>
        Contact me <Link to="/contact">here</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
