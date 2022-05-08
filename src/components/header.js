import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Menu from "./menu"
import { css } from '@emotion/react'

const Header = ({ siteTitle }) => (
  <header 
    className={css`
      background: transparent,
      marginBottom: 1.45rem,
    `}
  >
    <div
      className={css`
        margin: 0 auto,
        maxWidth: 960,
        padding: 1.45rem 1.0875rem,
      `}
    >
      <h1 
        className={css`
          color: #222222,
          textDecoration: none,
        `}
      >
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>

      <Menu />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
