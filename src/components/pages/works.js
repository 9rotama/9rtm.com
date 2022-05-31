import * as React from "react"
import { faBook } from "@fortawesome/free-solid-svg-icons"
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

function Card({ title, url, desc, use, ss }){
  return (
    <div
      css={css`
        width: 40%;
        height: 150px;
        background: white;
        border-radius: 20px;
        padding: 1px 30px 10px 30px;
        margin-bottom: 20px;
      `}
    >
      <h2 href={url}>{title}</h2>
      <p>{desc}</p>
      {use.map(e => <DeviconSmall name={e} />)}
      <img
        src={ss}
        css={css`
          float: right;
          height: 100%;
        `}
      />
    </div>
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
              url="9rtm.com"
              use={["react","gatsby"]}
              desc="ポートフォリオ"
            />
            <Card
              title="arcwebtool"
              use={["javascript","bootstrap"]}
              desc="譜面制作用マクロ"
            />
            <Card
              title="web-slide"
              use={["react"]}
              desc="ダサいスライドを作れるwebアプリ"
            />
            <Card
              title="tegei.github.io/works"
              use={["react","gatsby"]}
              desc="作品紹介ページ"
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
              use={["unity"]}
              desc="ホウキの魔女を操作するレースゲーム"
            />
            <Card
              title="BeySweets"
              use={["unity"]}
              desc="お菓子なコマで遊ぶゲーム"
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
