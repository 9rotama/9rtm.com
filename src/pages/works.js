import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
/** @jsx jsx */
import { Global, css, jsx } from '@emotion/react';

import Layout from '../components/layout';
import Seo from '../components/seo';

function IndexPage() {
  return (
    <Layout>
      <Seo title="works" />
      <div css={css`
          background-color: #222222a0;
          max-width: 1000px;
          padding: 2em 2em 2em 2em;
          margin-left: auto;
          margin-right: auto;
          border-radius: 3D0px;
        `}
      >
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
      </div>
    </Layout>
  );
}

export default IndexPage;
