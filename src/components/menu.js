import * as React from 'react';
import { Link } from 'gatsby';
/** @jsx jsx */
import { Global, css, jsx } from '@emotion/react';

function MenuButton({ path, name }) {
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
				`}
    >
      {name}
    </Link>
  );
}

function Menu({ data }) {
  return (
    <div css={css`
			position: absolute;
			top: 38px; right: 10vw;
		`}>
      <MenuButton path="/aboutme" name="about me" />
      <MenuButton path="/works" name="works" />
    </div>
  );
}

export default Menu;
