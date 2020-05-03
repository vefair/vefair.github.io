import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = (props) => (
    <nav className="nav">
      <h1 className="nav-title"><Link to="/">Alpont Vefair</Link></h1>
      <ul className="nav-items">
        <li className="nav-item"><a>Profile</a></li>
        <li className="nav-item"><a>Background</a></li>
        <li className="nav-item"><a>Visualosities</a></li>
        <li className="nav-item"><a>Contacts</a></li>
        <li className="nav-item"><a>OOC</a></li>
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
