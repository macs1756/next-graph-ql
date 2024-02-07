"use client"
import React from 'react';
import { ApolloProvider, useQuery } from '@apollo/client';
import client from '../apolloClient';
import { AppProps } from 'next/dist/shared/lib/router/router';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
