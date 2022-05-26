import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import Menu from './menu';

function Header({ siteTitle }) {
  return (
    <header>
      <div
        css={css`
          position: fixed;
          top: 0px;
          width: 100vw;
          padding: 2rem 2rem;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(50px);
          margin-bottom: 3rem;
          z-index: 100;

          @media (max-width: 1240px) {
            & {
              padding: 1.7rem 2rem;
            }
          }
        `}
      >
        <Link
          to="/"
          css={css`
            position: absolute;
            top: 13px; left: 10vw;
            color: #ffffffaa;
            text-decoration: none;
            font-size: 2em;
            font-weight: 500;
            letter-spacing: 0;

            &:hover{
              background: transparent;
              color: #ffffff;
              transform: scale(1.2);
            }

            @media (max-width: 1240px) {
              & {
                left: 5vw;
                font-size: 1.5em;
              }
            }
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
