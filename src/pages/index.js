import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Twemoji from 'react-twemoji';

import Layout from '../components/layout';
import Seo from '../components/seo';

function SnsLink({ icon, url, color }) {
  return(
    <a 
      target="_blank" 
      href={url}
      css={css`
        &:hover{
          background-color: transparent;
        }
      `}>
      <FontAwesomeIcon 
        icon={icon} 
        css={css`
        color: #ffffff88;
        margin: 0.5rem;
        font-size: 2.3em;
        
        transition-duration: 0.3s;

        &:hover {
          color: ${color};
          transform: scale(1.3);
          transition-duration: 0.3s;
        }`}
      />
    </a>
  )
}

function IndexPage() {
  return (
    <Layout>
      <Seo title="home" />
      <div css={css`
        text-align: center;
      `}>
        <StaticImage 
          src='../images/danboicon.png'
          css={css`
            border-radius: 40%;
            margin: 4vw 0 2vw 0;
            filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
          `}
        /> 
        <p 
          css={css`
            font-size: 1.3em;
            font-weight: 600;
          `}
        >
          here is 9rotama's portfolio
        </p>
       
          <SnsLink icon={faGithub} url="https://github.com/9rotama" color="#9b5de5"/>
          <SnsLink icon={faTwitter} url="https://twitter.com/glctose_9" color="#00bbf9"/>

      </div>
     
    </Layout>
  );
}

export default IndexPage;
