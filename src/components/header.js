import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { AnchorLink } from 'gatsby-plugin-anchor-links';

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default function Header({ siteTitle }) {
  return (
    <div className="flex items-center justify-center">
      <div className="absolute top-0 p-8 w-full flex items-center max-w-7xl justify-between text-center bg-transparent">
        <p className="text-white font-black text-4xl">
          <Link to="/">
            THEO'S BLOG
          </Link>
        </p>
        <div className="text-white space-x-6">
          <button className="transform duration-300 hover:-translate-y-1">
            <Link className="p-3 text-lg rounded-lg font-extrabold bg-indigo-700 hover:bg-indigo-800" to="/">Home</Link>
          </button>
          <button className="transform duration-300 hover:-translate-y-1">
          <Link className="p-3 text-lg rounded-lg bg-gray-600 font-extrabold hover:bg-gray-800" to="/search">Search</Link>
          </button>
          <button className="transform duration-300 hover:-translate-y-1">
            <AnchorLink className="p-3 text-lg rounded-lg bg-gray-600 font-extrabold hover:bg-gray-800" to="/#blog-posts">Posts</AnchorLink>
          </button>
          <button className="transform duration-300 hover:-translate-y-1">
            <a href="https://theopoette.me" className="p-3 text-lg rounded-lg bg-gray-600 font-extrabold hover:bg-gray-800">My website</a>
          </button>
        </div>
      </div>
    </div>
  )
}
