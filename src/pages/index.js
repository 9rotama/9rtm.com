import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import icon from '../images/danboicon.png';
import github from '../images/github.svg';
import twitter from '../images/twitter.svg';
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
            margin: 4vw 0 2vw 0;
            filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
          `}
        /> 
        <p 
          css={css`
            font-size: 2em;
            font-weight: 600;
          `}
        >
          welcome to 9rotama's portfolio!!
        </p>

        
          <img 
            src={github} 
            css={css`
              filter: invert(50%);
              margin: 0.5rem;
              width: 2.5em;
              &:hover{
                filter: invert(8%) sepia(99%) saturate(3000%) hue-rotate(247deg) brightness(400%) contrast(145%)
              }
            `}
          />
          <img 
            src={twitter} 
            css={css`
              filter: invert(50%);
              margin: 0.5rem;
              width: 2.5em;
              &:hover{
                filter: invert(8%) sepia(99%) saturate(3000%) hue-rotate(200deg) brightness(300%) contrast(145%);
              }
            `}
          />
        
      </div>
     
    </Layout>
  );
}

export default IndexPage;
