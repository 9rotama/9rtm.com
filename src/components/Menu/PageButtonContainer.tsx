import { useTheme } from "@/hooks/useTheme";
import PageButton from "./PageButton";

type Props = {
  name: string;
  path: string;
  isActive: boolean;
};

export default function PageButtonContainer(props: Props) {
  const theme = useTheme();
  return <PageButton theme={theme} {...props} />;
}
