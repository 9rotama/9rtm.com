import { rootUrl, siteTitle } from "@/const/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `home | ${siteTitle}`,
  description: "9rotama home page",
  openGraph: {
    title: `home | ${siteTitle}`,
    description: "9rotama home page",
    url: `${rootUrl}`,
    siteName: siteTitle,
    type: "website",
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
