import { useState } from "react";
import Header from "../Header/Header";
import Background from "../Background/Background";
import {
  backgroundStateContext,
  setBackgroundStateContext,
} from "../../const/contexts";
import { GlobalStyles } from "./GlobalStyles";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const [backgroundState, setBackgroundState] = useState({
    render: true,
    switch: true,
  });

  return (
    <div>
      <GlobalStyles />
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
