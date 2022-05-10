import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
/** @jsx jsx */
import { Global, css, jsx } from '@emotion/react';

import Menu from './menu';

function Header({ siteTitle }) {
  return (
    <header>
      <div
        css={css`
        margin: 0 auto;
        padding: 3rem 2rem;
        background: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(50px);
        margin-bottom: 1.45rem;
        `}
      >
        <Link
          to="/"
          css={css`
            position: absolute;
            top: 4vh; left: 10vw;
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
