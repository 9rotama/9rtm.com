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
import NotFoundPage from "./pages/404"
import Background from "./background"

const menuButton = css`
  text-decoration: none;
  border-bottom: solid;
  border-color: #252A3450;
  border-width: 1px;
  border-radius: 5px;
  color: #252A34;
  font-size: 1.5em;
  font-weight: 500;
  margin: 0 0 0 2vw;
  padding: 5px 10px 5px 10px;
  transition-duration: 0.3s;

  &:hover {
    background: #252A34;
    color: #EAEAEA;
    transition-duration: 0.3s;
  }

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
        top: 18px;
        right: 15vw;

        @media (max-width: 1240px) {
          & {
            top: 15px;
            right: 15vw;
          }
        }
      `}
    >
      <Link to="/about" css={menuButton}>
        about
      </Link>
      <Link to="/works" css={menuButton}>
        works
      </Link>
    </div>
  )
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
          background: rgba(0, 0, 0, 0);
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
            top: 13px;
            left: 10vw;
            color: #252A34;
            text-decoration: none;
            font-size: 2em;
            font-weight: 500;
            letter-spacing: 0;
            padding: 0 0.4em 0 0.4em;
            border-radius: 50px;

            transition-duration: 0.3s;

            &:hover {
              background: transparent;
              background: #FF2E63;
              filter: drop-shadow(0px 2px 3px #FF2E63a0);
              transform: scale(1.2);
              color: white;

              transition-duration: 0.3s;
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
            background-color: #EAEAEA;
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
          @media (max-width: 1240px) {
            h1 {
              font-size: 2em;
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
        <NotFoundPage path="/404" />
        <HomePage path="/" />
      </Router>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
