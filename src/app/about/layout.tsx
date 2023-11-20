import { rootUrl, siteTitle } from "@/const/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `about | ${siteTitle}`,
  description: "9rotama home page",

  openGraph: {
    title: `about | ${siteTitle}`,
    description: "9rotama home page",
    url: `${rootUrl}/about`,
    siteName: siteTitle,
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
