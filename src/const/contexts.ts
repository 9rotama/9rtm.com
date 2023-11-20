import { Theme } from "@/types/theme";
import { createContext, Dispatch, SetStateAction } from "react";

type KaomojiBackgroundState = {
  render: boolean;
  switch: boolean;
};

export const kaomojiBackgroundStateContext =
  createContext<KaomojiBackgroundState>({
    render: true,
    switch: true,
  });
export const setKaomojiBackgroundStateContext = createContext<
  Dispatch<SetStateAction<KaomojiBackgroundState>>
>(() => undefined);
export const themeContext = createContext<Theme>("light");
export const setThemeContext = createContext<Dispatch<SetStateAction<Theme>>>(
  () => undefined,
);
