import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import icon from '../images/danboicon.png';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import Layout from '../components/layout';
import Seo from '../components/seo';

function IndexPage() {
  return (
    <Layout>
      <Seo title="home" />
      <div css={css`
        text-align: center;
      `}>
        <img 
          src={icon}
          css={css`
            border-radius: 40%;
            filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
          `}
        /> 
        <p 
          css={css`
            font-size: 1.9em;
            font-weight: 600;
          `}
        >
          welcome to 9rotama's portfolio!!
        </p>
      </div>
     
    </Layout>
  );
}

export default IndexPage;
