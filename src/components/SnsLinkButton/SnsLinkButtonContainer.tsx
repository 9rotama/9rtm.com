"use client";

import { useTheme } from "@/hooks/useTheme";
import { Sns } from "@/types/sns";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import SnsLinkButton from "./SnsLinkButton";

type Props = {
  name: Sns;
  url: string;
  icon: IconDefinition;
};

export default function SnsLinkButtonContainer(props: Props) {
  const theme = useTheme();
  return <SnsLinkButton theme={theme} {...props} />;
}
