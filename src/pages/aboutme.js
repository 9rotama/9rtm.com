import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Global, css } from '@emotion/react';
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";


import Layout from '../components/layout';
import Seo from '../components/seo';
import ContextBox from '../components/contextbox';

function Context(){
  return(
    <p>
      Webやゲーム制作、UI・ポスターデザインを主に勉強しています。
    </p>
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
      >
    </ContextBox>

    </Layout>
  );
}

export default AboutmePage;
