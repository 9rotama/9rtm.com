import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import Layout from '../components/layout';
import Seo from '../components/seo';

const iconStyles = {
  main: css`
    
  `
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
            font-size: 2em;
            font-weight: 600;
          `}
        >
          welcome to 9rotama's portfolio!!
        </p>
        <FontAwesomeIcon 
          icon={faGithub}
          css={css`
          margin: 1rem;
          font-size: 2.5em;
          transition-duration: 0.3s;

          &:hover {
            color: #806991;
            transform: scale(1.3);
            transition-duration: 0.3s;
          }`}
        />
        <FontAwesomeIcon icon={faTwitter} css={css`
          margin: 1rem;
          font-size: 2.5em;
          transition-duration: 0.3s;

          &:hover {
            color: #118AB2;
            transform: scale(1.3);
            transition-duration: 0.3s;
          }`}
        />
      </div>
     
    </Layout>
  );
}

export default IndexPage;
