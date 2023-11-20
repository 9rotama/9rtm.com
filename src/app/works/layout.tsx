import { rootUrl, siteTitle } from "@/const/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `works | ${siteTitle}`,
  description: "9rotama home page",
  openGraph: {
    title: `works | ${siteTitle}`,
    description: "9rotama home page",
    url: `${rootUrl}/works`,
    siteName: siteTitle,
    type: "website",
  },
};

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
