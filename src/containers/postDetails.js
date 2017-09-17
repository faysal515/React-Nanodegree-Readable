import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getPostsById, deletePost, votePost} from '../actions/posts'
import {getCommentsOfPost, createComment,voteComment} from '../actions/comments'
import PostDetails from '../components/postDetails'
import Loader from '../components/loader'

class PostDetailsContainer extends Component {
  componentDidMount() {
    const {id} = this.props.match.params
    //console.log(this)
    this.props.getPost(id)
      .then(res => {
        this.props.getCommentsOfPost(id)
      })
      .catch(e => {
        console.log('in cmm ', e)
      })
  }


  render() {
    let shouldLoad = this.props.post.post && this.props.post.comments
    return shouldLoad ?<PostDetails
      {...this.props}
    /> : <Loader/>
  }
}

const mapStateToProps = (store,ownProps) => {
  return {
    post: store.post
  }

}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    getPost: (id) => dispatch(getPostsById(id)),
    deletePost: (id) => dispatch(deletePost(id)),
    getCommentsOfPost: id => dispatch(getCommentsOfPost(id)),
    publishComment: data => dispatch(createComment(data)),
    votePost: (postId,vote) => dispatch(votePost(postId, vote)),
    voteComment: (commentId, vote) => dispatch(voteComment(commentId,vote))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostDetailsContainer);