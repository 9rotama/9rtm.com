"use client";

import { useTheme } from "@/hooks/useTheme";
import Welcome from "./Welcome";

export default function WelcomeContainer() {
  const theme = useTheme();

  return <Welcome theme={theme} />;
}
