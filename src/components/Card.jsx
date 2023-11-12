import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Card = props => {
  const { name, slug, summary} = props
  console.log(props)
  return (
    <div className="bg-white h-full ring-1 ring-black ring-opacity-5 rounded-md overflow-hidden group">
      <Link to={`/${slug}`}>
        <div className="group-hover:opacity-75 transition duration-150 ease-in-out">
        </div>
        <div className="p-4 sm:p-5">
          <h1 className="sm:text-lg text-gray-900 font-semibold">{name}</h1>
          <p className="text-sm sm:text-base text-gray-700">{summary}</p>
        </div>
      </Link>
    </div>
  )
}

export default Card
