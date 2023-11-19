import { Metadata } from "next";

export const metadata: Metadata = {
  title: "about",
  description: "自己紹介",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
