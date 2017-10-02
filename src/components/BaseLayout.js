import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class BaseLayout extends Component {
  render(){
    return(
      <div>
        <header>
          <nav className="nav justify-content-center">
            <NavLink exact to="/">
            <li className="nav-link">
              PollyBlog
            </li>
            </NavLink>
            <NavLink to="/create">
            <li className="nav-link">
              Create Post
            </li>
            </NavLink>
            <NavLink to="/allposts">
            <li className="nav-link">
              Show All Posts
            </li>
            </NavLink>
          </nav>
        </header>
        {this.props.children}
      </div>
    )
  }
}
 export default BaseLayout
