import * as React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faItchIo } from '@fortawesome/free-brands-svg-icons';
import Seo from '../seo';

function SnsLink({ icon, url, color }) {
  SnsLink.propTypes = {
    icon: PropTypes.element.isRequired,
    url: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  };
  return (
    <a
      href={url}
      css={css`
        &:hover{
          background-color: transparent;
        }`}
    >
      <FontAwesomeIcon
        icon={icon}
        css={css`
        color: #ffffff66;
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
  );
}

function HomePage() {
  return (
    <>
      <Seo title="home" />
      <div css={css`
        position: relative;
        top: 30vh;
        text-align: center;
        z-index: 101;
        `}
      >
        <img
          src="https://avatars.githubusercontent.com/u/65887771?v=4"
          css={css`
            position: relative;
            width: 180px;
            height: 180px;
            border-radius: 40%;
            filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.4));

            animation-name: BlurfadeInDown;
            animation-duration: 0.3s;
          `}
        />
        <p
          css={css`
            position: relative;
            font-size: 1.3em;
            font-weight: 500;
            margin-top: 30px;
            filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.4));

            animation-name: BlurfadeInDown;
            animation-duration: 0.4s;
          `}
        >
          here is 9rotama&apos;s portfolio
        </p>
        <div
          css={css`
            position: relative;
            font-size: 1.1em;
            margin-top: 30px;

            animation-name: BlurfadeInDown;
            animation-duration: 0.5s;
          `}
        >
          <SnsLink icon={faGithub} url="https://github.com/9rotama" color="#9b5de5" />
          <SnsLink icon={faTwitter} url="https://twitter.com/glctose_9" color="#00bbf9" />
          <SnsLink icon={faItchIo} url="https://9rotama.itch.io" color="#F6434A" />
        </div>
      </div>
    </>
  );
}

export default HomePage;
