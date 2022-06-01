/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Router } from "@gatsbyjs/reach-router"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
/** @jsx jsx */
import { Global, css, jsx } from "@emotion/react"

import HomePage from "./pages/home"
import AboutPage from "./pages/about"
import WorksPage from "./pages/works"
import Background from "./background"

const menuButton = css`
  text-decoration: none;
  border-bottom: solid;
  border-color: #252A3450;
  border-width: 1px;
  border-radius: 5px;
  color: #252A34;
  font-size: 1.5em;
  margin-left: 10px;
  padding: 2px 10px 2px 10px;
  transition-duration: 0.3s;

  &:hover {
    background: #252A3410;
    transition-duration: 0.3s;
  }
  &:active {
    background: #252A34;
    color: #EAEAEA;
    transition-duration: 0.3s;
  }

  @media (max-width: 960px) {
    & {
      font-size: 1.2em;
    }
  }
`
function Menu() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: right;
        margin: 15px 10vw 0 0;

        @media (max-width: 960px) {
          & {
            margin: 10px 10px 0 0;
          }
        }
      `}
    >
      <Link to="/about" css={menuButton} onClick="">
        about
      </Link>
      <Link to="/works" css={menuButton} onClick="">
        works
      </Link>
    </div>
  )
}

function Header({ siteTitle }) {
  return (
    <header
      css={css`
        position: fixed;
        top: 0px;
        width: 100%;
        margin-bottom: 3rem;
        z-index: 100;

        @media (max-width: 600px) {
          & {
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
          color: #252A34;
          text-decoration: none;
          font-size: 2em;
          font-weight: 600;
          padding: 0px 10px 0px 10px;
          margin: 15px 0 0 10vw;

          transition-duration: 0.3s;

          @media (max-width: 960px) {
            & {
              font-size: 1.5em;
              margin: 10px 0 0 10px;
            }
          }

          &:hover {
            transform: scale(1.1);

            transition-duration: 0.3s;
          }
          &:active {
            color: #FF2E63;

            transition-duration: 0.3s;
          }
        `}
      >
        {siteTitle}
      </Link>

      <Menu />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "",
}

function Layout() {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,300;0,500;0,600;0,800&family=M+PLUS+1:wght@100;400;600;800&display=swap");
          body {
            font-family: "Montserrat Alternates", "M PLUS 1", sans-serif;
            color: #252A34;
            background-color: #D0DDE9;
            margin: 0;
          }
          h1 {
            font-weight: 500;
            font-size: 2em;
            color: #252A34;
            text-decoration: none;
            border-bottom: solid;
            border-color: #252A3430;
            border-width: 1px;
            margin: 60px 0px 30px 0px;
          }
          h2 {
            font-weight: 600;
          }
          h3 {
            font-weight: 500;
          }
          h4 {
            font-weight: 500;
          }
          @media (max-width: 960px) {
            h1 {
              font-size: 1.8em;
              font-weight: 500;
            }
            h2 {
              font-weight: 600;
            }
            h3 {
              font-weight: 500;
            }
            h4 {
              font-weight: 500;
            }
          }
          @media (max-width: 480px) {
            h1 {
              font-size: 1.6em;
              font-weight: 500;
            }
            h2 {
              font-size: 1.2em;
              font-weight: 600;
            }
            h3 {
              font-weight: 500;
            }
            h4 {
              font-weight: 500;
            }
        }
          @keyframes BlurfadeIn {
            0% {
              opacity: 0;
              filter: blur(10px);
            }

            100% {
              opacity: 1;
            }
          }
          @keyframes BlurUp{
            0% {
              transform: translateY(70px);
              filter: blur(20px);
            }

            100% {
              transform: translateY(0px);
            }
          }

          @keyframes BlurfadeInDown {
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

          @keyframes Down {
            0% {
              transform: translateY(-70px);
            }

            100% {
              transform: translateY(0px);
            }
          }
        `}
      />
      <Background />
      <Header siteTitle={data.site.siteMetadata?.title || "Title"} />
      <Router>
        <AboutPage path="/about" />
        <WorksPage path="/works" />
        <HomePage default />
      </Router>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
