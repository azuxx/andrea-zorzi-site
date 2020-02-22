import PropTypes from "prop-types"
import React from "react"

import "./header.scss"

const Header = (props) => (
  <header className="header">
    {/*<h1>*/}
    {/*  <Link to="/">{siteTitle}</Link>*/}
    {/*</h1>*/}
    <div className="header__trigger-magic" onClick={props.onClick}>...</div>
  </header>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
