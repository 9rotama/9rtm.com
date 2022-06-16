import * as React from "react"
import { css } from "@emotion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBook,
  faUserGroup,
  faUser
} from "@fortawesome/free-solid-svg-icons"
import ContextBox from "../contextbox"
import LinkButton from "../linkButton"

type DeviconSmallProps = {
  name: string;
}

const DeviconSmall:React.FC<DeviconSmallProps> = ({ name }) => {
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

type CardProps = {
  title: string;
  url: string;
  description: string;
  techStack: Array<string>;
  isTeam?: boolean;
}

const Card: React.FC<CardProps> = ({ title, url, description, techStack, isTeam }) => {
  return (
    <a
      css={css`
        position: relative;
        width: 40%;
        background: #f5faff;
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
        {description}
      </p>
      <div
        css={css`
          position: absolute;
          float: left;
          bottom: 15px;
        `}
      >
        {techStack.map(e => (
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

type CardWrapperProps = {
  children?: React.ReactNode;
}

const CardWrapper: React.FC<CardWrapperProps> = ({ children }) => {
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

const WorksPage = () => {
  return (
    <>
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
              techStack={["react", "gatsby"]}
              description="ポートフォリオ"
            />
            <Card
              title="arcwebtool"
              url="https://9rotama.github.io/arcwebtool/"
              techStack={["javascript", "bootstrap"]}
              description="譜面制作用マクロ"
            />
            <Card
              title="tegei.github.io/works"
              url="https://tegei.github.io/works"
              techStack={["react", "gatsby"]}
              description="作品紹介ページ"
            />
            <Card
              title="web-slide"
              url="https://web-slide-puce.vercel.app"
              techStack={["react"]}
              description="ダサいスライドを作れるwebアプリ"
              isTeam
            />
            <Card
              title="re-translate-bot"
              url="https://github.com/9rotama/re-translate-bot"
              techStack={["python", "heroku"]}
              description="Discordのメッセージを自動で再翻訳"
            />
          </CardWrapper>
          <h1>🕹️ games</h1>
          <CardWrapper>
            <Card
              title="SkyWitches"
              url="https://9rotama.itch.io/skywitches"
              techStack={["unity"]}
              description="ホウキの魔女を操作するレースゲーム"
              isTeam
            />
            <Card
              title="BeySweets"
              url="https://potekumakun.itch.io/bey-sweets"
              techStack={["unity"]}
              description="お菓子なコマで遊ぶゲーム"
              isTeam
            />
            <Card
              title="Solitude Sniper"
              url="https://unityroom.com/games/solitude-sniper"
              techStack={["unity"]}
              description="スナイパーFPS"
              isTeam
            />
          </CardWrapper>
          <h1>🎨 graphics / designs / others</h1>
          <LinkButton
            color="#FF2E63"
            hoverColor="#c21943"
            url="https://drive.google.com/drive/folders/1gOM3VzAkHeZK05HKfPlGGLTR5jneGcgQ?usp=sharing"
          >
            Google Drive
          </LinkButton>
        </p>
      </ContextBox>
    </>
  )
}

export default WorksPage
