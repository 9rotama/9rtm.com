import SnsLinkButtonContainer from "@/components/SnsLinkButton/SnsLinkButtonContainer";
import WelcomeContainer from "@/components/Welcome/WelcomeContainer";
import { snsLinks } from "@/const/links";
import styles from "./page.module.css";

export const metadata = {
  title: "home",
  description: "ホーム",
};

export default function Home() {
  return (
    <div className={styles.module}>
      <WelcomeContainer />
      <div className={styles.separator} />
      <div className={styles.snsLinks}>
        {snsLinks.map((e) => (
          <SnsLinkButtonContainer
            key={e.name + "-snslinks"}
            name={e.name}
            icon={e.icon}
            url={e.url}
          />
        ))}
      </div>
    </div>
  );
}
