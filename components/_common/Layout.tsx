import { useState, createContext, Dispatch, SetStateAction } from "react";
import Header from "../Header/Header";
import Background from "../Background/Background";

type Props = {
  children: React.ReactNode;
};

export const showBackgroundContext = createContext<boolean>(false);
export const setShowBackgroundContext = createContext<
  Dispatch<SetStateAction<boolean>>
>(() => undefined);

const Layout: React.FC<Props> = ({ children }) => {
  const [showBackground, setShowBackground] = useState<boolean>(true);

  return (
    <div>
      <showBackgroundContext.Provider value={showBackground}>
        <setShowBackgroundContext.Provider value={setShowBackground}>
          <Header siteTitle={"9RTM.COM"} />
          <Background />
        </setShowBackgroundContext.Provider>
      </showBackgroundContext.Provider>

      {children}
    </div>
  );
};

export default Layout;
