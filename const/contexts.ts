import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

import { LightTheme, Themes } from "./themes";

type BackgroundState = {
  render: boolean;
  switch: boolean;
};

export const backgroundStateContext = createContext<BackgroundState>({
  render: true,
  switch: true,
});
export const setBackgroundStateContext = createContext<
  Dispatch<SetStateAction<BackgroundState>>
>(() => undefined);

export const themeContext = createContext<Themes>(LightTheme);

export const setThemeContext = createContext<Dispatch<SetStateAction<Themes>>>(
  () => undefined
);
