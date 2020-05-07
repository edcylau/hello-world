import React from 'react';
import Layout from '../components/layout'
import Head from '../components/head'



const ContactPage = (props) => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p><strong>Reach me via email</strong> imedmundlcya@gmail.com</p>
      <p>Reach me via <strong><a href="https://twitter.com/explore" target="_blank" rel="noopener noreferrer">Twitter</a></strong></p>
    </Layout>
  )
}

export default ContactPage;
