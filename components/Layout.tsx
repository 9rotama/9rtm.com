import * as React from "react";
import Header from "./header/Header";
import Background from "./background/Background";

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
