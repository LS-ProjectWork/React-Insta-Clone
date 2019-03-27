import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  state = {data: []};

  componentDidMount() {
  this.setState({data: dummyData})
  }

  render() {
    if(this.state.data === []) {
      return <h1>I'm getting data!</h1>
    }
    return (
      <div className="App">
        <SearchBar />
        <PostContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;
