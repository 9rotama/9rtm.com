import * as React from "react";
import type { InferGetStaticPropsType, NextPage } from "next";
import { css } from "@emotion/react";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import ContextBox from "../components/templates/ContextBox";
import ProfImage from "../components/atoms/about/ProfImage";
import { SkillCard } from "../components/organisms/about/SkillCard";
import CardWrapper from "../components/organisms/common/CardWrapper";
import { client } from "../libs/client";
import type { skill } from "../types/skill";

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "skills" });

  return {
    props: {
      skills: data.contents,
    },
  };
};

type Props = {
  skills: Array<skill>;
};

const AboutPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  skills,
}: Props) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
      <ContextBox
        pageIcon={faAddressCard}
        pageTitle="about me"
        pageDescription="自己紹介、スキルなど"
      >
        <h1>📘 profile</h1>
        <ProfImage />
        <div>
          <h2
            css={css`
              ${nameStyle}
            `}
          >
            9rotama
          </h2>
          <h3>game dev / UI design</h3>
          情報系大学の3年です。音楽ゲームが好きです。
          <br />
          主にクライアント側の開発に興味があります。
        </div>
        <h1>⌨️ i use</h1>
        <CardWrapper>
          {skills.map((e) => (
            <SkillCard
              key={e.name + "-skillicon"}
              name={e.name}
              iconSrc={e.iconSrc}
              rank={e.rank}
              description={e.description}
              url={e.url}
            />
          ))}
        </CardWrapper>
      </ContextBox>
    </>
  );
};

const nameStyle = css`
  display: inline-block;

  font-size: 1.5em;
  border-bottom: dotted #027775 5px;
`;

export default AboutPage;
