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
import Background from './background';

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
          @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,500;0,600;0,800&family=M+PLUS+1:wght@100;400;600;800&display=swap');
          body {
            font-family: 'Montserrat Alternates', 'M PLUS 1', sans-serif;
            color: #ffffff;
            background-color: #121212;
            margin: 0;
            overflow: hidden;
          }
          a {
            border-radius: 5px;
            transition-duration: 0.3s;
          }
          a:hover {
						background-color: rgba(255,255,255,0.2);
            transition-duration: 0.3s;
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
      <Background />
      <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
      <div>
        <main>{children}</main>
        <footer css={css`
          position: absolute;
          text-align: center;
          font-size: small;
          color: rgba(255,255,255,0.5);
          width: 200px;
          left: 50%;
          bottom: 14px;
          margin-left: -100px;
        `}
        >
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
