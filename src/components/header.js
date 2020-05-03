import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = (props) => (
    <nav className="nav">
      <h1 className="nav-title"><span>Alpont Vefair</span></h1>
      <ul className="nav-items">
        <li className="nav-item"><span>Profile</span></li>
        <li className="nav-item"><span>Background</span></li>
        <li className="nav-item"><span>Visualosities</span></li>
        <li className="nav-item"><span>Contacts</span></li>
        <li className="nav-item"><span>OOC</span></li>
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
