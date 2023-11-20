"use client";
import { useTheme } from "@/hooks/useTheme";
import { Work } from "@/types/work";
import WorkCard from "./WorkCard";

type Props = {
  data: Work;
};

export default function WorkCardContainer({ data }: Props) {
  const theme = useTheme();
  return <WorkCard theme={theme} data={data} />;
}
