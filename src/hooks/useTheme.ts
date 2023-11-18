import { themeContext } from "@/const/contexts";
import { ThemeString } from "@/types/theme";
import { useContext } from "react";

export const useTheme = (): ThemeString => {
  const theme = useContext(themeContext);

  return theme === "light" ? "Light" : "Dark";
};
