import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import LoginPage from './components/login/login'
import withAuthenticate from './components/authentication/withAuthenticate';


const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

class App extends Component {
  render() {
    return(
      <ComponentFromWithAuthenticate />
    )
  }
}

export default App;
