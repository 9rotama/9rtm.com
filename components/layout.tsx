import * as React from "react"
import Link from "next/link"
import { css } from "@emotion/react"
import Header from "./header/Header"
import Background from "./background/Background"

type LayoutProps = {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header siteTitle={"9rtm.com"} />
      {children}
    </div>
  )
}

export default Layout
