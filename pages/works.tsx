import * as React from "react";
import type { InferGetStaticPropsType, NextPage } from "next";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import ContextBox from "../components/common/ContextBox";
import LinkButton from "../components/common/LinkButton";
import CardWrapper from "../components/common/CardWrapper";
import { WorkCard } from "../components/works/WorkCard";
import { client } from "../libs/client";
import { Work } from "../types/Work";
import MyHead from "../components/common/MyHead";

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "works" });

  return {
    props: {
      works: data.contents,
    },
  };
};

type Props = {
  works: Array<Work>;
};

const WorksPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  works,
}: Props) => {
  const pageTitle = "works";
  const pageDescription = "作ったもの";
  return (
    <>
      <MyHead title={pageTitle} description={pageDescription} />

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
      <ContextBox
        pageIcon={faBook}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
      >
        <h1>⌨️ programming</h1>
        <CardWrapper>
          {works.map((e: Work) => (
            <WorkCard key={e.title + "-workscard"} data={e} />
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
