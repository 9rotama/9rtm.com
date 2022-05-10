/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
/** @jsx jsx */
import { Global, css, jsx } from '@emotion/react';

import Header from './header';

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div>
        <Global styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,500;0,900;1,100;1,500;1,800&family=M+PLUS+1:wght@100;400;800&family=Montserrat:ital,wght@0,100;0,500;0,800;1,100;1,500;1,800&display=swap');
          body {
            font-family: 'Montserrat Alternates', 'M PLUS 1';
          }
          h1{
            font-weight: 800;
          }
          h3 {
            font-weight: 500;
          }
          h4 {
            font-weight: 500;
          }
        `}
        />
      </div>

      <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
      <div
        css={css`
          font-family: 'Montserrat';
        `}
      >
        <main>{children}</main>
        <footer>
          ©
          {' '}
          {new Date().getFullYear()}
          {' '}
          9rotama
        </footer>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
