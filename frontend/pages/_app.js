import React from 'react';
import { ContextProvider } from '../src/contexts';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <div className="App">
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  </div>
);

export default MyApp;
