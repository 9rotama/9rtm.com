import * as React from "react";
import Header from "./header/Header";
import Background from "../components/background/Background";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header siteTitle={"9rtm.com"} />
      <Background />
      {children}
    </div>
  );
};

export default Layout;
