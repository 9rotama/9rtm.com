import * as React from "react";
import type { InferGetStaticPropsType, NextPage } from "next";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import ContextBox from "../components/templates/ContextBox";
import LinkButton from "../components/atoms/common/LinkButton";
import CardWrapper from "../components/organisms/common/CardWrapper";
import { WorkCard } from "../components/organisms/works/WorkCard";
import { client } from "../libs/client";
import type { work } from "../types/work";

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "works" });

  return {
    props: {
      works: data.contents,
    },
  };
};

type Props = {
  works: Array<work>;
};

const WorksPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  works,
}: Props) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
      <ContextBox
        pageIcon={faBook}
        pageTitle="works"
        pageDescription="作ったもの"
      >
        <h1>⌨️ programming</h1>
        <CardWrapper>
          {works.map((e: work) => (
            <WorkCard
              key={e.title + "-workscard"}
              title={e.title}
              url={e.url}
              imgSrc={e.imgSrc.url}
              description={e.description}
              techStack={e.techStack.map((obj) => obj.tech)}
              isTeam={e.isTeam}
            />
          ))}
        </CardWrapper>
        <h1>🎨 graphics / designs / others</h1>
        <LinkButton url="https://drive.google.com/drive/folders/1gOM3VzAkHeZK05HKfPlGGLTR5jneGcgQ?usp=sharing">
          jump to google drive
        </LinkButton>
      </ContextBox>
    </>
  );
};

export default WorksPage;
