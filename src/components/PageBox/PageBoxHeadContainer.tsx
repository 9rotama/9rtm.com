"use client";

import { useTheme } from "@/hooks/useTheme";
import PageBoxHead from "./PageBoxHead";

type Props = {
  children: React.ReactNode;
};

export default function PageBoxHeadContainer({ children }: Props) {
  const theme = useTheme();
  return <PageBoxHead theme={theme}>{children}</PageBoxHead>;
}
