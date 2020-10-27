import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './styles/global';

import Routes from './routes';

function App() {
  return (
    <>
      <Router>
        <Routes />
      </Router>

      <GlobalStyles />

    </>
  );
}

export default App;
