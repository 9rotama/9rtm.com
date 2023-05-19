import { useState, createContext, Dispatch, SetStateAction } from "react";
import Header from "../Header/Header";
import Background from "../Background/Background";

type Props = {
  children: React.ReactNode;
};

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

const Layout: React.FC<Props> = ({ children }) => {
  const [backgroundState, setBackgroundState] = useState({
    render: true,
    switch: true,
  });

  return (
    <div>
      <backgroundStateContext.Provider value={backgroundState}>
        <setBackgroundStateContext.Provider value={setBackgroundState}>
          <Header siteTitle={"9RTM.COM"} />
          <Background />
        </setBackgroundStateContext.Provider>
      </backgroundStateContext.Provider>

      {children}
    </div>
  );
};

export default Layout;
