import React from 'react';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import dummyData from '../../dummy-data';

class PostsPage extends React.Component {
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

export default PostsPage;