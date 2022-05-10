import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
/** @jsx jsx */
import { Global, css, jsx } from '@emotion/react';

import Menu from './menu';

function Header({ siteTitle }) {
  return (
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
        <Link
          to="/"
          css={css`
            color: #ffffff;
            text-decoration: none;
            font-size: 2em;
            font-weight: 800;
          `}
        >
          {siteTitle}
        </Link> 
      <Menu />
      </div>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
