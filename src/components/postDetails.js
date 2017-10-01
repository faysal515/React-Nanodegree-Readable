import React, {Component} from 'react'
import {getReadableDate} from '../utils'
import Comment from './comment'
import CommentBox from './commentBox'
import {UpArrow, DownArrow, NotFound} from './icons'
import Rodal from 'rodal';
import isEmpty from 'lodash/isEmpty'
import 'rodal/lib/rodal.css';

class PostDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  populateCommentList() {
    const {id} = this.props.match.params
    const list = this.props.post.comments[id]
    return list ? list.map(l =>
        <Comment
          key={l.id} data={l}
          voteComment={this.props.voteComment}
          editComment={this.props.editComment}
          deleteComment={this.props.deleteComment}
        />) : null
  }

  handleDelete(id) {
    this.props.deletePost(id)
      .then(res => {
        console.log('>> ', this)
        this.props.history.push('/')
      })
  }

  componentWillUnmount() {
    this.props.clearPost()
  }

  deleteModal() {
    const {id} = this.props.match.params
    return (

      <Rodal
        height={150}
        visible={this.state.visible} onClose={e => this.setState({visible:false}) }>
        <div className="modal-text">Are you sure to delete this post ?</div>
        <button className="btn btn-danger modal-close" onClick={e => this.handleDelete(id)}>Delete</button>
      </Rodal>
    )
  }

  render() {
    const {post} = this.props.post


    return !isEmpty(post) ? <div className="container m-top-3 m-bot-7">
      <div>
        <p className="author-name">
          {post.author}
        </p>
        <p className="post-date">
          {getReadableDate(post.timestamp)}
        </p>
        <p className="post-heading">
          {post.title}
        </p>
        <p className="post-des">
          {post.body}
        </p>
        <div>
          <div className="fll">
            <span className="like-count"><b>{post.voteScore}</b></span>
            <UpArrow onClick={() =>this.props.votePost(post.id, 'upVote')}/>
            <DownArrow onClick={() =>this.props.votePost(post.id,'downVote')} />
          </div>
          <div className="flr">
            <button className="action-bttn" onClick={e => this.props.history.push(`/create?edit=${post.id}`)}>Edit</button>
            <button onClick={e => this.setState({visible: true})} className="action-bttn">Delete</button>
          </div>
        </div>
        <div className="post-comment m-top-7">
          <CommentBox
            publishComment={this.props.publishComment}
            post={this.props.post.post}
          />
          <div>
            {/*select*/}
          </div>
          {this.populateCommentList()}

        </div>
      </div>
      {this.deleteModal()}
    </div> : <NotFound/>
  }

}

export default PostDetails;