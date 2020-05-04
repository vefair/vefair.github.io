import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = props => (
  <nav className="nav">
    <h1 className="nav-title">
      <Link to="/">Alpont Vefair</Link>
    </h1>
    <ul className="nav-items">
      <li className="nav-item">
        <Link to="/profile">Profile</Link>
      </li>
      <li className="nav-item">
        <Link to="/rhooks">Roleplay Hooks</Link>
      </li>
      <li className="nav-item">
        <Link to="/gallery">Gallery</Link>
      </li>
      <li className="nav-item">
        <a href="https://vefair.tumblr.com/">Aesthetics</a>
      </li>
      <li className="nav-item">
        <Link to="/contacts">Contacts</Link>
      </li>
      <li className="nav-item">
        <Link to="/ooc">OOC</Link>
      </li>
    </ul>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
