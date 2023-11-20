import { ThemeString } from "@/types/theme";
import { Work } from "@/types/work";
import clsx from "clsx";
import Image from "next/image";
import TechIcon from "../TechIcon/TechIcon";
import ToolTipContainer from "../ToolTip/ToolTipContainer";
import IsTeamIconContainer from "./IsTeamIconContainer";
import styles from "./WorkCard.module.css";

type Props = {
  theme: ThemeString;
  data: Work;
};

export default function WorkCard({ theme, data }: Props) {
  return (
    <div className={clsx([styles[`module${theme}`], styles.module])}>
      <a href={data.url} className={styles.link}>
        <div className={styles.imgWrapper}>
          <Image
            src={data.screenshot}
            layout="fill"
            alt={data.title}
            className={styles.img}
          />
        </div>
        <div className={styles.contents}>
          <div className={styles.textContents}>
            <h3 className={styles.title}>{data.title}</h3>
            <p className={styles.description}>{data.description}</p>
          </div>
          <div className={styles.fixedBottom}>
            <div className={styles.techStackList}>
              {data.techStack.map((tech) => (
                <ToolTipContainer
                  key={tech.name}
                  content={<div>{tech.name}</div>}
                >
                  <TechIcon
                    src={tech.icon}
                    key={tech.name}
                    size={30}
                    name={tech.name}
                  />
                </ToolTipContainer>
              ))}
            </div>
            <div className={styles.isTeam}>
              <IsTeamIconContainer isTeam={data.isTeam} />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
