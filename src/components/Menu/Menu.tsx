import {
  kaomojiBackgroundStateContext,
  setKaomojiBackgroundStateContext,
  setThemeContext,
  themeContext,
} from "@/const/contexts";
import { menuItems } from "@/const/menu";
import {
  faDrawPolygon,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import styles from "./Menu.module.css";
import PageButtonContainer from "./PageButtonContainer";
import SwitchButtonContainer from "./SwitchButtonContainer";

export default function Menu() {
  const pathname = usePathname();
  const kaomojiBackgroundState = useContext(kaomojiBackgroundStateContext);
  const setKaomojiBackgroundState = useContext(
    setKaomojiBackgroundStateContext,
  );
  const theme = useContext(themeContext);
  const setTheme = useContext(setThemeContext);

  const switchBackgroundState = () => {
    if (kaomojiBackgroundState.switch) {
      setKaomojiBackgroundState({ render: true, switch: false });
      setTimeout(() => {
        setKaomojiBackgroundState({ render: false, switch: false });
      }, 300);
    } else {
      setKaomojiBackgroundState({ render: true, switch: true });
    }
  };

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={styles.module}>
      {menuItems.map((item) =>
        pathname == item.path ? (
          <PageButtonContainer
            key={item.name}
            name={item.name}
            path={item.path}
            isActive={true}
          />
        ) : (
          <PageButtonContainer
            key={item.name}
            name={item.name}
            path={item.path}
            isActive={false}
          />
        ),
      )}
      <SwitchButtonContainer
        icon={faDrawPolygon}
        isActive={kaomojiBackgroundState.switch}
        onClick={switchBackgroundState}
      />
      <SwitchButtonContainer
        icon={theme === "light" ? faSun : faMoon}
        isActive={false}
        onClick={switchTheme}
      />
    </div>
  );
}
