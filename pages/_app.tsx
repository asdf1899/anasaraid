import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';

const App = ({ Component, pageProps }: AppProps): JSX.Element => <Component {...pageProps} />;

export default App;
