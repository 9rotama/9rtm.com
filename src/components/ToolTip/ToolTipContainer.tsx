"use client";

import { useTheme } from "@/hooks/useTheme";
import ToolTip from "./ToolTip";

type Props = {
  content: React.ReactNode;
  children: React.ReactNode;
};
export default function ToolTipContainer({ content, children }: Props) {
  const theme = useTheme();
  return (
    <ToolTip theme={theme} content={content}>
      {children}
    </ToolTip>
  );
}
