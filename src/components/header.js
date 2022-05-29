import PropTypes from 'prop-types';
import { Link } from 'gatsby';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

function MenuButton({ path, name }) {
  MenuButton.propTypes = {
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };
  return (
    <Link
      to={path}
      css={css`
        text-decoration: none;
        border-bottom:solid;
        border-color:#ffffff50;
        border-width:1px;
        color: #ffffffaa;
        font-size: 1.5em;
        font-weight: 500;
        margin: 0 0 0 2vw;
        padding: 5px 10px 5px 10px;

        @media (max-width: 1240px) {
          & {
            font-size: 1.2em;
          }
        }
      `}
    >
      {name}
    </Link>
  );
}

function Menu() {
  return (
    <div
      css={css`
        position: absolute;
        top: 18px; right: 15vw;

        @media (max-width: 1240px) {
          & {
            top: 15px; right: 15vw;
          }
        }
      `}
    >
      <MenuButton path="/aboutme" name="about me" />
      <MenuButton path="/works" name="works" />
    </div>
  );
}

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
          margin-bottom: 3rem;
          z-index: 100;

          @media (max-width: 1240px) {
            & {
              padding: 1.7rem 2rem;
            }
          }

          animation-name: Down;
          animation-duration: 0.5s;
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
