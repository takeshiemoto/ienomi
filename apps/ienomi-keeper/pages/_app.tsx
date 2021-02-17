import React from 'react';
import { AppProps } from 'next/app';

import './styles.css';
import { AuthProvider } from '../context/Auth';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default CustomApp;
