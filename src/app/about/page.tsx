import FooterContainer from "@/components/Footer/FooterContainer";
import PageBoxContainer from "@/components/PageBox/PageBoxContainer";
import PageBoxHeadContainer from "@/components/PageBox/PageBoxHeadContainer";
import PageBoxWrapper from "@/components/PageBox/PageBoxWrapper";
import TechIcon from "@/components/TechIcon/TechIcon";
import ToolTipContainer from "@/components/ToolTip/ToolTipContainer";
import { skills } from "@/const/skills";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <PageBoxWrapper>
      <PageBoxContainer
        icon={faAddressCard}
        title="ABOUT ME"
        description="自己紹介、スキルなど"
      >
        <PageBoxHeadContainer>📘 PROFILE</PageBoxHeadContainer>
        <div className={styles.prof}>
          <Image
            src="https://avatars.githubusercontent.com/u/65887771?v=4"
            alt={"prof"}
            width={180}
            height={180}
            className={styles.profImage}
            priority={true}
          />
          <div className={styles.profContent}>
            <p className={styles.name}>9rotama</p>
            <p>front-dev / game-dev</p>
            情報系大学の学生です。音楽ゲームが好きです。
            <br />
            主にクライアント側の開発に興味があります。
          </div>
        </div>
        <PageBoxHeadContainer>⌨️ I USE</PageBoxHeadContainer>
        <section className={styles.skills}>
          {skills.map((skill) => (
            <ToolTipContainer key={skill.name} content={<>{skill.name}</>}>
              <TechIcon name={skill.name} size={40} src={skill.iconSrc} />
            </ToolTipContainer>
          ))}
        </section>
      </PageBoxContainer>
      <FooterContainer />
    </PageBoxWrapper>
  );
}
