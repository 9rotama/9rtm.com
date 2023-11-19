import { ThemeString } from "@/types/theme";
import styles from "./ToolTip.module.css";

type Props = {
  theme: ThemeString;
  content: React.ReactNode;
  children: React.ReactNode;
};

export default function ToolTip({ theme, content, children }: Props) {
  return (
    <div className={styles.module}>
      <div className={styles.toolTip}>{content}</div>
      {children}
    </div>
  );
}
