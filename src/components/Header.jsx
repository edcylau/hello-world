import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useState, useEffect, useRef } from "react"
import MenuMobile from "./MenuMobile"
import { FaBars } from "react-icons/fa"
import {LiaBarsSolid} from "react-icons/all"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [navBackground, setNavBackground] = useState('appBarTransparent')

  const useStyles = {
    appBarTransparent: "border-black",
    appBarSolid: "bg-themegreen-standard border-b border-black border-opacity-100 md:bg-opacity-100",
  }

  const navRef = useRef()
  navRef.current = navBackground

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 200
      if (show) {
        setNavBackground('appBarSolid')

      } else {
        setNavBackground('appBarTransparent')

      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const { site } = useStaticQuery(graphql`
    query {
      site {
        data: siteMetadata {
          menu {
            name
            to
          }
        }
      }
    }
  `)

  return (
    /* for future use <div className="container pt-6 pb-12 md:pt-12 fixed z-10">*/
    <div className={`w-screen fixed z-50 ${useStyles[navRef.current]}`}>

      <div className="flex justify-between items-center max-w-9/10 mx-auto">
        <div></div>
        <Link to="/">
          <img alt="Logo" className="w-[220px] py-8" src="/logo.svg" />
        </Link>

        <button
          className="block"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open Menu"
        >
          <FaBars className="h-6 w-auto text-white fill-current -mt-1" />
        </button>

        <div className="hidden">
          {site.data.menu.map((link, key) => (
            <Link
              key={`menu_desktop_link${key}`}
              className="ml-6 sm:ml-8 text-sm sm:text-base font-medium border-b-2 pb-2 border-transparent text-white hover:text-gray-800 hover:border-gray-200 "
              activeClassName="text-gray-500 hover:border-blue-600"
              to={link.to}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <MenuMobile
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        links={site.data.menu}
      />
    </div >
  )
}

export default Header
