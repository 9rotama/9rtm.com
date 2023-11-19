import { Metadata } from "next";

export const metadata: Metadata = {
  title: "works",
  description: "作ったもの",
};

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
