import React from 'react';
import Footer from '../components/footer'
import Header from '../components/header'

import styles from '../styles/index.scss'

const Layout = (props) => {
  return (
    <div>
      <Header />
        {props.children}
      <Footer />
    </div>
  )
}

export default Layout;
