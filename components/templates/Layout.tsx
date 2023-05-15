import { useState, createContext, useContext } from "react";
import Header from "../organisms/header/Header";
import Background from "../organisms/background/Background";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header siteTitle={"9RTM.COM"} />
      <Background />
      {children}
    </div>
  );
};

export default Layout;
