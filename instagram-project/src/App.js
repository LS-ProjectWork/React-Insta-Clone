import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-Data'
import PostContainer from './components/PostContainer/PostContainer'

class App extends Component {
  state = {data: dummyData};

  render() {
    return (
      <div className="App">
        <PostContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;
