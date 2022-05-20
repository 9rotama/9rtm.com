import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

import Layout from '../components/layout';
import Seo from '../components/seo';
import ContextBox from '../components/contextbox';

function Context() {
  return (
    <>
      <h2>Profile</h2>
      <StaticImage
        src="../images/danboicon.png"
        css={css`
          position: relative;
        `}
      />
      <p>
        名前: 9rotama
        <br />
        誕生日: 2001/09/09
        <br />
        <br />
        Webやゲーム制作、UI・ポスターデザインを主に勉強しています。大学ではCSを専攻しています。
      </p>
    </>
  );
}

function AboutmePage() {
  return (
    <Layout>
      <Seo title="about me" />
      <ContextBox
        pageIcon={faAddressCard}
        pageTitle="about me"
        context={Context()}
      />
    </Layout>
  );
}

export default AboutmePage;
