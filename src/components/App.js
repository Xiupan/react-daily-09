import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import BaseLayout from './BaseLayout'
import CreatePost from './CreatePost'
import PostList from './PostList'
import ShowPost from './ShowPost'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <BaseLayout>
              <Route exact path="/" component={PostList}/>
              <Route path="/create" component={CreatePost}/>
              <Route path="/allposts" component={PostList}/>
            </BaseLayout>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
