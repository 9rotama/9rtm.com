import * as React from 'react';
import { faBook } from '@fortawesome/free-solid-svg-icons';

import Seo from '../seo';
import ContextBox from '../contextbox';


function Context() {
  return (
    <p>
      <h1>websites</h1>

      <h1>games</h1>

      <h1>graphics/designs/others</h1>
      <a href="https://drive.google.com/drive/folders/1gOM3VzAkHeZK05HKfPlGGLTR5jneGcgQ?usp=sharing">Google Drive</a>
    </p>
  );
}

function WorksPage() {
  return (
    <>
      <Seo title="works" />
      <ContextBox
        pageIcon={faBook}
        pageTitle="works"
        context={Context()}
      />
    </>
  );
}

export default WorksPage;
