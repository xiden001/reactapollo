import React from 'react';
import BookList from "./components/BookList";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app </h2>
      <BookList/>
    </div>
  </ApolloProvider>
  );
}

export default App;
