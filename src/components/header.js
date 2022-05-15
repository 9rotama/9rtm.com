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
          position: fixed;
          top: 0px;
          width: 100vw;
          padding: 3rem 2rem;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(50px);
          margin-bottom: 3rem;
          z-index: 100;
        `}
      >
        <Link
          to="/"
          css={css`
            position: absolute;
            top: 30px; left: 10vw;
            color: #ffffff;
            text-decoration: none;
            font-size: 2em;
            font-weight: 800;
            letter-spacing: 0;
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
