"use client";

import { useTheme } from "@/hooks/useTheme";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import PageBox from "./PageBox";

type Props = {
  icon: IconDefinition;
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function PageBoxContainer(props: Props) {
  const theme = useTheme();
  return <PageBox theme={theme} {...props} />;
}
