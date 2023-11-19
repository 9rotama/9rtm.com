import { Metadata } from "next";

export const metadata: Metadata = {
  title: "home",
  description: "ホーム",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
