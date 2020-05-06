import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'



const AboutPage = props => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>I am currently looking for freelance job.</p>
      <p>
        Contact me <Link to="/contact">here</Link>
      </p>
      <Link to="/">Back</Link>
    </Layout>
  )
}

export default AboutPage
