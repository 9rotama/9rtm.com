import * as React from 'react';
import { Link } from 'gatsby';
/** @jsx jsx */
import { Global, css, jsx } from '@emotion/react';

function MenuButton({ path, name }) {
	return(
			<Link 
				to={path}
				css={css`
					text-decoration: none;
					color: #ffffff;
					font-size: 1.5em;
					font-weight: 600;
					margin: 1vw;
				`}>
					{name}
			</Link>
	);
}

function Menu({ data }) {
  return (
    <div css={css`
			position: absolute;
			top: 5vh; right: 10vw;
		`}>
      <MenuButton path="/aboutme" name="about me" />
			<MenuButton path="/works" name="works" />
    </div>
  );
}

export default Menu;
