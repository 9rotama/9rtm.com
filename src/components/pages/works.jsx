import * as React from "react"
import { faBook } from "@fortawesome/free-solid-svg-icons"
import { faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PropTypes from "prop-types"
/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import Seo from "../seo"
import ContextBox from "../contextbox"
import LinkButton from "../linkButton"

function DeviconSmall({ name }) {
  return (
    <img
      src={
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/" +
        name +
        "/" +
        name +
        "-original.svg"
      }
      css={css`
        width: 30px;
        margin-right: 10px;
      `}
    />
  )
}

DeviconSmall.propTypes = {
  name: PropTypes.string.isRequired,
}

function Card({ title, url, desc, use, ss, isTeam }) {
  return (
    <a
      css={css`
        position: relative;
        width: 40%;
        background-image: url("${ss}");
        border-radius: 20px;
        padding: 0px 30px 30px 30px;
        margin: 10px;
        transition-duration: 0.3s;
        text-decoration: none;
        color: #252a34;

        &:hover {
          filter: drop-shadow(0px 6px 8px #252a3422);
          background: #ffffff;
          transition-duration: 0.3s;
          transform: translateY(-5px);
        }

        @media (max-width: 960px) {
          & {
            margin: 10px 2.5px 10px 2.5px;
            padding: 0px 20px 30px 20px;
            width: 40%;
          }
        }
        @media (max-width: 640px) {
          & {
            width: 100%;
          }
        }
      `}
      href={url}
    >
      <h2
        css={css`
          @media (max-width: 960px) {
            font-size: 1.3em;
          }
        `}
      >
        {title}
      </h2>
      <p
        css={css`
          margin-bottom: 40px;
          @media (max-width: 960px) {
            font-size: 0.9em;
          }
        `}
      >
        {desc}
      </p>
      <div
        css={css`
          position: absolute;
          float: left;
          bottom: 15px;
        `}
      >
        {use.map(e => (
          <DeviconSmall name={e} />
        ))}
      </div>

      <FontAwesomeIcon
        icon={isTeam ? faUserGroup : faUser}
        css={css`
          position: absolute;
          color: #252f6022;
          margin-bottom: auto;
          font-size: 2em;
          bottom: 20px;
          right: 8%;
        `}
      />
    </a>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  use: PropTypes.string.isRequired,
}

function CardWrapper({ children }) {
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
      `}
    >
      {children}
    </div>
  )
}

function WorksPage() {
  return (
    <>
      <Seo title="works" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
      <ContextBox pageIcon={faBook} pageTitle="works">
        <p>
          <h1>🌎 websites</h1>
          <CardWrapper>
            <Card
              title="9rtm.com"
              url="https://9rtm.com"
              use={["react", "gatsby"]}
              ss="../assets/images/works_ss/portfolio.png"
              desc="ポートフォリオ"
            />
            <Card
              title="arcwebtool"
              url="https://9rotama.github.io/arcwebtool/"
              use={["javascript", "bootstrap"]}
              desc="譜面制作用マクロ"
            />
            <Card
              title="tegei.github.io/works"
              url="https://tegei.github.io/works"
              use={["react", "gatsby"]}
              desc="作品紹介ページ"
            />
            <Card
              title="web-slide"
              url="https://web-slide-puce.vercel.app"
              use={["react"]}
              desc="ダサいスライドを作れるwebアプリ"
              isTeam
            />
            <Card
              title="re-translate-bot"
              url="https://github.com/9rotama/re-translate-bot"
              use={["python", "heroku"]}
              desc="Discordのメッセージを自動で再翻訳"
            />
          </CardWrapper>
          <h1>🕹️ games</h1>
          <CardWrapper>
            <Card
              title="SkyWitches"
              url="https://9rotama.itch.io/skywitches"
              use={["unity"]}
              desc="ホウキの魔女を操作するレースゲーム"
              isTeam
            />
            <Card
              title="BeySweets"
              url="https://potekumakun.itch.io/bey-sweets"
              use={["unity"]}
              desc="お菓子なコマで遊ぶゲーム"
              isTeam
            />
            <Card
              title="Solitude Sniper"
              url="https://unityroom.com/games/solitude-sniper"
              use={["unity"]}
              desc="スナイパーFPS"
              isTeam
            />
          </CardWrapper>
          <h1>🎨 graphics / designs / others</h1>
          <LinkButton color="#FF2E63" hoverColor="#c21943" url="https://drive.google.com/drive/folders/1gOM3VzAkHeZK05HKfPlGGLTR5jneGcgQ?usp=sharing">Google Drive</LinkButton>

        </p>
      </ContextBox>
    </>
  )
}

CardWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default WorksPage
