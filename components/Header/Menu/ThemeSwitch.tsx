import { useContext } from "react";
import { setThemeContext, themeContext } from "../../../const/contexts";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { DarkTheme, LightTheme } from "../../../const/themes";
import { SwitchButton } from "./SwitchButton";

export const ThemeSwitch = () => {
  const theme = useContext(themeContext);
  const setTheme = useContext(setThemeContext);

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTheme(DarkTheme);
    } else {
      setTheme(LightTheme);
    }
  };
  return (
    <SwitchButton
      icon={faCircleHalfStroke}
      isActive={theme == DarkTheme}
      handleClick={handleClick}
    />
  );
};
