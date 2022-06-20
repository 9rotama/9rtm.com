import * as React from "react"
import {
  faBook,
} from "@fortawesome/free-solid-svg-icons"
import ContextBox from "../components/ContextBox"
import LinkButton from "../components/LinkButton"
import CardWrapper from "../components/pages/worksPage/CardWrapper"
import Card from "../components/pages/worksPage/Card"
import Background from "../components/background/Background"

const WorksPage = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
      <ContextBox pageIcon={faBook} pageTitle="works">
        <h1>🌎  web-apps</h1>
        <CardWrapper>
          {/*jsonなどにデータを入れてmapなどで回して表示するほうが良さそう*/}
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
        <h1>🕹️  games</h1>
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
        <h1>🎨  graphics / designs / others</h1>
        <LinkButton
          color="#FF2E63"
          hoverColor="#c21943"
          url="https://drive.google.com/drive/folders/1gOM3VzAkHeZK05HKfPlGGLTR5jneGcgQ?usp=sharing"
        >
          jump to drive
        </LinkButton>
      </ContextBox>
    </>
  )
}

export default WorksPage
