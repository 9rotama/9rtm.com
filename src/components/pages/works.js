import * as React from "react"
import { faBook } from "@fortawesome/free-solid-svg-icons"
import { faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import Seo from "../seo"
import ContextBox from "../contextbox"

function DeviconSmall({ name }){
  return (
    <img
      src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/"+name+"/"+name+"-original.svg"}
      css={css`
        width: 30px;
        margin-right: 10px;
      `}
    />
  )
}

function Card({ title, url, desc, use, ss, isTeam }){
  return (
    <a
      css={css`
        width: 40%;
        background: #FBFBFD;
        border-radius: 20px;
        padding: 1px 30px 20px 30px;
        margin: 10px;
        transition-duration: 0.3s;
        text-decoration: none;
        color: #252A34;

        &:hover {
          filter: drop-shadow(0px 6px 8px #252A3422);
          background: #FFFFFF;
          transition-duration: 0.3s;
          transform: translateY(-5px);
        }

        @media (max-width: 960px) {
          & {
            width: 100%;
            margin: 5px;
          }
        }
        @media (max-width: 480px) {
          & {
            margin: 5px -5px 5px -5px;
          }
        }
      `}
      href={url}
    >
      <h2>{title}</h2>
      <p>{desc}</p>
      {use.map(e => <DeviconSmall name={e} />)}

      <FontAwesomeIcon
        icon={isTeam ?  faUserGroup : faUser}
        css={css`
          color: #252f6022;
          margin-bottom: auto;
          font-size: 2em;
          float: right;
        `}
      />
    </a>
  );
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
          <div
            css={css`
              display:flex;
              flex-wrap:wrap;
              justify-content: space-around;
            `}
          >
            <Card
              title="9rtm.com"
              url="https://9rtm.com"
              use={["react","gatsby"]}
              desc="ポートフォリオ"
            />
            <Card
              title="arcwebtool"
              url="https://9rotama.github.io/arcwebtool/"
              use={["javascript","bootstrap"]}
              desc="譜面制作用マクロ"
            />
            <Card
              title="tegei.github.io/works"
              url="https://tegei.github.io/works"
              use={["react","gatsby"]}
              desc="作品紹介ページ"
            />
            <Card
              title="web-slide"
              url="https://web-slide-puce.vercel.app"
              use={["react"]}
              desc="ダサいスライドを作れるwebアプリ"
              isTeam
            />
          </div>

          <h1>🕹️ games</h1>
          <div
            css={css`
              display:flex;
              flex-wrap:wrap;
              justify-content: space-around;
            `}
          >
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
          </div>

          <h1>🎨 graphics / designs / others</h1>
          GoogleDriveに載せています。
          <a href="https://drive.google.com/drive/folders/1gOM3VzAkHeZK05HKfPlGGLTR5jneGcgQ?usp=sharing">
            link
          </a>
        </p>
      </ContextBox>
    </>
  )
}

export default WorksPage
