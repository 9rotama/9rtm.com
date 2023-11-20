"use client";

import { useTheme } from "@/hooks/useTheme";
import IsTeamIcon from "./IsTeamIcon";

type Props = {
  isTeam: boolean;
};
export default function IsTeamIconContainer({ isTeam }: Props) {
  const theme = useTheme();
  return <IsTeamIcon theme={theme} isTeam={isTeam} />;
}
