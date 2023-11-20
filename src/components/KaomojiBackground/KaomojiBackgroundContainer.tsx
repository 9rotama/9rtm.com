import { useTheme } from "@/hooks/useTheme";
import KaomojiBackground from "./KaomojiBackground";

export default function KaomojiBackgroundContainer() {
  const theme = useTheme();
  return <KaomojiBackground theme={theme} />;
}
