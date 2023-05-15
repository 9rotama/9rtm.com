import {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import Header from "../organisms/header/Header";
import Background from "../organisms/background/Background";

type Props = {
  children: React.ReactNode;
};

export const showBackgroundContext = createContext<boolean>(false);
export const setShowBackgroundContext = createContext<
  Dispatch<SetStateAction<boolean>>
>(() => undefined);

const Layout: React.FC<Props> = ({ children }) => {
  const [showBackground, setShowBackground] = useState<boolean>(false);

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
