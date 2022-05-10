import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';

import Layout from '../components/layout';
import Seo from '../components/seo';

function IndexPage() {
  return (
    <Layout>
      <Seo title="home" />

      <p>
        welcome to 9rotama's portfolio!!
      </p>
    </Layout>
  );
}

export default IndexPage;
