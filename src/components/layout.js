/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
/** @jsx jsx */
import { Global, css, jsx } from '@emotion/react';

import Header from './header';
import Background from './background';

function Layout() {
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
    <div>
      <Global styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,300;0,500;0,600;0,800&family=M+PLUS+1:wght@100;400;600;800&display=swap');
        body {
          font-family: 'Montserrat Alternates', 'M PLUS 1', sans-serif;
          color: #ffffff;
          background-color: #121212;
          margin: 0;
        }
        a {
          border-radius: 5px;
          transition-duration: 0.3s;
        }
        a:hover {
          background-color: rgba(255,255,255,0.2);
          transition-duration: 0.3s;
        }
        h1 {
          font-weight: 500;
          font-size: 2em;
          color: #ffffffaa;
          text-decoration: none;
          border-bottom: solid;
          border-color: #ffffff10;
          border-width: 2px;
          margin-bottom: 15px;
        }
        h3 {
          font-weight: 500;
        }
        h4 {
          font-weight: 500;
        }
        @media (max-width: 1240px) {
          h1 {
            font-size: 2em;
          }
        }
        @keyframes BlurfadeIn{
          0% {
            opacity: 0;
            filter: blur(10px);
          }

          100% {
            opacity: 1;
          }
        }

        @keyframes BlurfadeInDown{
          0% {
            opacity: 0;
            transform: translateY(-40px);
            filter: blur(10px);
          }

          100% {
            transform: translateY(0px);
            opacity: 1;
          }
        }
      `}
      />
      <Background />
      <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
    </div>
  );
}

export default Layout;
