import FooterContainer from "@/components/Footer/FooterContainer";
import PageBoxContainer from "@/components/PageBox/PageBoxContainer";
import PageBoxHeadContainer from "@/components/PageBox/PageBoxHeadContainer";
import PageBoxWrapper from "@/components/PageBox/PageBoxWrapper";
import WorkCardContainer from "@/components/WorkCard/WorkCardContainer";
import { works } from "@/const/works";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import styles from "./page.module.css";

export default function WorksPage() {
  return (
    <PageBoxWrapper>
      <PageBoxContainer
        icon={faFolderOpen}
        title="WORKS"
        description="趣味プロジェクト"
      >
        <PageBoxHeadContainer>⌨️ APP</PageBoxHeadContainer>
        <div className={styles.cardGrid}>
          {works.apps.map((data) => (
            <WorkCardContainer key={data.title} data={data} />
          ))}
        </div>
      </PageBoxContainer>
      <FooterContainer />
    </PageBoxWrapper>
  );
}
