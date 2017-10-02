import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import BaseLayout from './BaseLayout'
import CreatePost from './CreatePost'
import PostList from './PostList'
import ShowPost from './ShowPost'

class App extends Component {
  render() {
    return (
      <div className="App">
        App
        <BaseLayout>

        </BaseLayout>
        <CreatePost>

        </CreatePost>
        <PostList>

        </PostList>
        <ShowPost>

        </ShowPost>
      </div>
    );
  }
}

export default App;
