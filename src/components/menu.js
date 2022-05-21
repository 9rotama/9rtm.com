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
        color: #ffffff;
        font-size: 1.5em;
        font-weight: 600;
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
        top: 38px; right: 15vw;

        @media (max-width: 1240px) {
          & {
            top: 33px; right: 15vw;
          }
        }
      `}
    >
      <MenuButton path="/aboutme" name="about me" />
      <MenuButton path="/works" name="works" />
    </div>
  );
}

export default Menu;
