
import React from "react"
import Seo from "../components/seo"
import Layout from "../layouts/Layout"
import NavBarPadding from "../components/NavBarPadding"

const ProjectItems = () => {


  return (
    <Layout>
      <NavBarPadding>
        <div className="h-screen">
          <h1>Portfolio</h1>
        </div>
      </NavBarPadding>
    </Layout>
  )
}

export default ProjectItems

export const Head = () => <Seo title="Project" description="Project template" image="" />


