import React from 'react';
import { ApolloProvider, useQuery } from '@apollo/client';
import client from '../apolloClient';
import { AppProps } from 'next/dist/shared/lib/router/router';
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
