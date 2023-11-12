import React, { useState, useEffect } from "react"
import Layout from "../layouts/Layout"
import Seo from "../components/seo"

const ErrorPage = () => {
  const [isMount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  },[])

  return (
  <Layout>
    <div className="">
      <div className="container py-12 pt-64 pb-64 lg:pb-128">
        <div className="md:flex md:flex-col justify-center items-center pt-8 md:mt-28 md:pb-28">
        {
          !isMount ?
              <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                LOADING..
              </h1>
          :
          <div>
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Error 404
            </h1>
            <h2 className="text-xl leading-tight font-semibold tracking-tight text-white sm:text-2xl">
              PAGE NOT FOUND.
            </h2>
          </div>
        }
        </div>
      </div>
    </div>
  </Layout>
)}

export default ErrorPage

export const Head = () => <Seo title="Error 404" description="The page doesn't exists" />
