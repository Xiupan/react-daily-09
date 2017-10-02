import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class PostList extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/")
    .then(results => {
      return results.json()
    }).then(data => {
      this.setState({
        posts: data
      })
    })
  }

  render(){
    let match = this.props.match;
    const posts = this.state.posts.map(post => {
      return(
        <div key={post._id}>
          <div>
            <Link to={`${match.url}/${post._id}`}>
              {post.title}
            </Link>
          </div>
        </div>
      )
    })
    return(
      <div>
        {posts}
      </div>
    )
  }
}
 export default PostList
