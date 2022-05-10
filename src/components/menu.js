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
					font-size: 1.7em;
					font-weight: 600;
					margin: 1em;
				`}>
					{name}
			</Link>
	);
}

function Menu({ data }) {
  return (
    <>
      <MenuButton path="/aboutme" name="about me" />
			<MenuButton path="/works" name="works" />
    </>
  );
}

export default Menu;
