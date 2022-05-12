import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Global, css } from '@emotion/react';

import Layout from '../components/layout';
import Seo from '../components/seo';

function IndexPage() {
  return (
    <Layout>
      <Seo title="about me" />

      <p>
        Webやゲーム制作、UI・ポスターデザインを主に勉強しています。
      </p>
    </Layout>
  );
}

export default IndexPage;
