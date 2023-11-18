import { Dosis, Inter, M_PLUS_1 } from "next/font/google";

export const dosis = Dosis({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const inter = Inter({
  weight: "variable",
  subsets: ["latin"],
});

export const m_plus_1 = M_PLUS_1({
  weight: "variable",
  subsets: ["latin"],
});
