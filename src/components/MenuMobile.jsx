import { Link } from "gatsby"
import { motion } from "framer-motion"
import PropTypes from "prop-types"
import React from "react"
import Overlay from "./Overlay"

const menuItem = {
  closed: {
    opacity: 0,
    transition: {
      delay: 0,
      duration: 0,
    },
    x: -20,
  },
  open: key => ({
    opacity: 1,
    transition: {
      delay: 0.25 + key * 0.1,
      type: "tween",
    },
    x: 0,
  }),
}

const MenuMobile = ({ links, isOpen, setIsOpen }) => {
  return (
    <Overlay isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="container flex flex-col justify-center bg-themegreen-dark">
        <ul className="text-center">
          {links.map((link, key) => (
            <motion.li
              className="my-3"
              animate={isOpen ? "open" : "closed"}
              custom={key}
              key={`menu_mobile_link${key}`}
              variants={menuItem}
            >
              <Link
                className="text-white hover:text-themepink-light"
                activeClassName="font-semibold text-themepink-light"
                to={link.to}
                onClick={() => setIsOpen(false)}
              >
                <h2 className="mb-8 xl:mb-20">{link.name}</h2>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </Overlay>
  )
}

MenuMobile.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ),
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
}

export default MenuMobile
