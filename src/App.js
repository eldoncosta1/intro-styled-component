import React from 'react';
import GlobalStyle from './theme/global';

import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
