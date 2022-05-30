/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { Router } from '@gatsbyjs/reach-router';
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby';
/** @jsx jsx */
import { Global, css, jsx } from '@emotion/react';

import HomePage from './pages/home';
import AboutPage from './pages/about';
import WorksPage from './pages/works';
import NotFoundPage from './pages/404';

const menuButton = css`
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
`
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
      <Link to="/about" css={menuButton}>about</Link>
      <Link to="/works" css={menuButton}>works</Link>
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

        @keyframes Down{
          0% {
            transform: translateY(-70px);
          }

          100% {
            transform: translateY(0px);
          }
        }
      `}
      />
      <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
      <Router>
        <AboutPage path="/about" />
        <WorksPage path="/works" />
        <NotFoundPage path="/404" />
        <HomePage path="/" />
      </Router>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
