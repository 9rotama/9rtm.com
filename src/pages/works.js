/** @jsx jsx */
import { jsx } from '@emotion/react';
import { faBook } from '@fortawesome/free-solid-svg-icons';

import Layout from '../components/layout';
import Seo from '../components/seo';
import ContextBox from '../components/contextbox';

function Context() {
  return (
    <p>
      <h1>Websites</h1>

      <h1>Games</h1>

      <h1>CGs/Designs/Others</h1>
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
