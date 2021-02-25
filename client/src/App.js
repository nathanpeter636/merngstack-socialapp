import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from "@apollo/client"
import './App.css'
import { Container } from 'semantic-ui-react'

import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import MenuBar from './components/Menubar'

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
      <Router>
        <Container>
        <MenuBar/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
        </Container>
      </Router>
    </ApolloProvider>
  );
}

export default App;
