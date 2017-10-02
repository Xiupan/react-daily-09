import React, {Component} from 'react'

class ShowPost extends Component {
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
      console.log(this.state.posts)
    })
  }

  render(){
    const { id } = this.props.match.params;
    const posts = this.state.posts.map(post => {
      if (post._id === id){
        return(
          <div key={post._id}>
            <div>
              Title: {post.title}
            </div>
            <div>
              Author: {post.authorName || post.authorsName}
            </div>
            <div>
              Body: {post.blog || post.blogEntry}
            </div>
          </div>
        )
      }
    })
    return(
      <div>
        {posts}
      </div>
    )
  }
}
 export default ShowPost
