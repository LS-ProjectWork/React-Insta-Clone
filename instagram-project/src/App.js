import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';

class App extends Component {
  render() {
    return(
      <PostsPage />
    )
  }
}

export default App;
