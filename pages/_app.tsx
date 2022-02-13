import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import * as ga from '../lib/ga';
import { ThemeProvider } from '../providers';
import { Root } from '../containers/Root';

const App = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    console.log('Bruh 👀 \n\n-> github.com/asdf1899');
  }, []);

  return (
    <>
      <ThemeProvider>
        <Root pageProps={pageProps} Component={Component} router={router} />
      </ThemeProvider>
    </>
  );
};

export default App;
