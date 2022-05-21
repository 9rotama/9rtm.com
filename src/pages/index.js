import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Layout from '../components/layout';
import Seo from '../components/seo';

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
  );
}

function IndexPage() {
  return (
    <Layout>
      <Seo title="home" />
      <div css={css`
        position: relative;
        top: 30vh;
        text-align: center;
        z-index: 101;
        `}
      >
        <StaticImage
          src="../images/danboicon.png"
          css={css`
            position: relative;
            border-radius: 40%;
            filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.4));
          `}
        />
        <p
          css={css`
            position: relative;
            font-size: 1.3em;
            font-weight: 600;
            margin-top: 30px;
            filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.4));
          `}
        >
          here is 9rotama&apos;s portfolio
        </p>
        <div
          css={css`
            position: relative;
            font-size: 1.1em;
            font-weight: 600;
            margin-top: 30px;
          `}
        >
          <SnsLink icon={faGithub} url="https://github.com/9rotama" color="#9b5de5" />
          <SnsLink icon={faTwitter} url="https://twitter.com/glctose_9" color="#00bbf9" />
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
