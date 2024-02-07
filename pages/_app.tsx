import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import client from '../apolloClient'; 

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;