import * as React from 'react';
import { Router, Link } from '@reach/router'
/** @jsx jsx */
import { jsx } from '@emotion/react';

import Layout from '../components/layout';
import HomePage from './home';
import AboutmePage from './about';
import WorksPage from './works';
import NotFoundPage from './404';

function IndexPage() {
  return (
    <>
      <Link to="/aboutme" />
      <Layout />
      <Router>
        <HomePage path="/" />
        <AboutmePage path="/aboutme" />
        <WorksPage path="/works" />
        <NotFoundPage path="/404" />
      </Router> 
    </>
  );
}

export default IndexPage;
