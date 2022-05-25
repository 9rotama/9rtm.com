import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/** @jsx jsx */
import { jsx } from '@emotion/react';

import Layout from '../components/layout';
import HomePage from './home';
import AboutmePage from './aboutme';
import WorksPage from './works';

function IndexPage() {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/aboutme" element={<AboutmePage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default IndexPage;
