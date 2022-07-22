import * as React from "react";
import Header from "./header/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header siteTitle={"9rtm.com"} />
      {children}
    </div>
  );
};

export default Layout;
