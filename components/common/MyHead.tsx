import type { NextPage } from "next";
import Head from "next/head";

type Props = {
  title: string;
  description: string;
};

const MyHead: React.FC<Props> = ({ title, description }: Props) => {
  const siteName = "9rtm.com";
  const pageTitle = `${title} - ${siteName}`;

  return (
    <Head>
      <title>{pageTitle}</title>
    </Head>
  );
};

export default MyHead;
