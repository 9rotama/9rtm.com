import { useTheme } from "@/hooks/useTheme";
import PatternBackground from "./PatternBackground";

export default function PatternBackgroundContainer() {
  const theme = useTheme();
  return <PatternBackground theme={theme} />;
}
