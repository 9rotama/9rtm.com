import { useTheme } from "@/hooks/useTheme";
import Header from "./Header";

export default function HeaderContainer() {
  const theme = useTheme();
  return <Header theme={theme} />;
}
