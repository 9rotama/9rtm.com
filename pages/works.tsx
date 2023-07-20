import * as React from "react";
import type { InferGetStaticPropsType, NextPage } from "next";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import ContextBox from "../components/_common/ContextBox/ContextBox";
import LinkButton from "../components/_pages/works/LinkButton";
import CardWrapper from "../components/_common/CardCommon/CardWrapper";
import WorkCard from "../components/_pages/works/WorkCard/WorkCard";
import { Work } from "../types/work";
import MyHead from "../components/_common/MyHead";
import { works } from "../const/works";

const WorksPage: NextPage = () => {
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
