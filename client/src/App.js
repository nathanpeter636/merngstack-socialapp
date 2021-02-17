import React from 'react';

import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from "@apollo/client"


const httpLink = createHttpLink({
  uri: 'http://localhost:5000'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client} httpLink={httpLink} >
      <h1>Hello Apollo</h1>
    </ApolloProvider>
  );
}

export default App;
