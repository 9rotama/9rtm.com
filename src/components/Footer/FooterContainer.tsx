"use client";

import { useTheme } from "@/hooks/useTheme";
import Footer from "./Footer";

export default function FooterContainer() {
  const theme = useTheme();
  return <Footer theme={theme} />;
}
