import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { css } from '@emotion/react'

import Menu from "./menu"

const Header = ({ siteTitle }) => (
  <header 
    css={css`
      background: transparent;
      margin-bottom: 1.45rem;
    `}
  >
    <div
      css={css`
        margin: 0 auto;
        max-width: 960;
        padding: 1.45rem 1.0875rem;
      `}
    >
      <h1 
        css={css`
          color: #222222;
          text-decoration: none;
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
