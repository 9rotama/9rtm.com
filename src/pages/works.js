/** @jsx jsx */
import { jsx } from '@emotion/react';
import { faBook } from '@fortawesome/free-solid-svg-icons';

import Layout from '../components/layout';
import Seo from '../components/seo';
import ContextBox from '../components/contextbox';

function Context() {
  return (
    <p>
      <h2>Websites</h2>
      <h4>9rtm.com</h4>
      <h4>tegei.github.io/works</h4>
      <h4>arcwebtool</h4>

      <h2>Games</h2>
      <h4>SkyWitches</h4>
      <h4>BeySweets</h4>

      <h2>CGs/Designs/Others</h2>
      <a href="https://drive.google.com/drive/folders/1gOM3VzAkHeZK05HKfPlGGLTR5jneGcgQ?usp=sharing">Google Drive</a>
    </p>
  );
}

function WorksPage() {
  return (
    <Layout>
      <Seo title="works" />
      <ContextBox
        pageIcon={faBook}
        pageTitle="works"
        context={Context()}
      />
    </Layout>
  );
}

export default WorksPage;
