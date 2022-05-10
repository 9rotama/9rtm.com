import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Global, css } from '@emotion/react';

import Layout from '../components/layout';
import Seo from '../components/seo';

function IndexPage() {
  return (
    <Layout>
      <Seo title="works" />

      <p>
        <h3>Websites</h3>
        <h4>tegei.github.io/works</h4>
        <h4>arcwebtool</h4>

        <h3>Games</h3>
        <h4>SkyWitches</h4>
        <h4>BeySweets</h4>

        <h3>CGs/Designs/Others</h3>
        <a href="https://drive.google.com/drive/folders/1gOM3VzAkHeZK05HKfPlGGLTR5jneGcgQ?usp=sharing">Google Drive</a>
      </p>
    </Layout>
  );
}

export default IndexPage;
