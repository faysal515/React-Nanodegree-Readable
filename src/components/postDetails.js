import React, {Component} from 'react'
import {getReadableDate} from '../utils'
import Loader from './loader'
import Comment from './comment'
import CommentBox from './commentBox'
import {UpArrow, DownArrow} from './icons'
import Rodal from 'rodal';
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
    //console.log('>>>.', this.props.post)
    const list = this.props.post.comments[id]
    return list ? list.map(l =>
        <Comment
          key={l.id} data={l}
          voteComment={this.props.voteComment}
          editComment={this.props.editComment}
          deleteComment={this.props.deleteComment}
        />) : null
  }

  deleteModal() {
    const {id} = this.props.match.params
    return (
      <Rodal visible={this.state.visible} onClose={e => this.setState({visible:false}) }>
        <div>Are you sure to delete this post ?</div>
        <button className="btn btn-danger" onClick={e => this.props.deletePost(id)}>Confirm</button>
      </Rodal>
    )
  }

  render() {
    const {post} = this.props.post

    return post ? <div className="container m-top-3 m-bot-7">
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
          {/*Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Consectetur enim obcaecati quasi, quisquam recusandae repudiandae voluptatum?
           Et saepe vitae voluptates? A ducimus maxime mollitia necessitatibus, nihil
           perferendis quis quisquam repudiandae sapiente similique veritatis voluptate.
           Ab aperiam delectus deleniti earum est eum maiores natus nisi nostrum omnis quam,
           rerum similique sint soluta suscipit. Accusantium asperiores aut cum fuga harum illo
           iure nostrum praesentium quaerat quas quisquam quod quos, reprehenderit sapiente voluptatem!
           Adipisci animi aperiam beatae consequatur cum cumque deserunt ea esse est exercitationem harum labore magnam,
           neque numquam officia optio praesentium quam quas quasi quia quod ratione repellendus, saepe totam voluptatibus.*/}
          {post.body}
        </p>
        <div>
          <div className="fll">
            <span className="like-count"><b>{post.voteScore}</b></span>
            <UpArrow onClick={() =>this.props.votePost(post.id, 'upVote')}/>
            <DownArrow onClick={() =>this.props.votePost(post.id,'downVote')} />
          </div>
          <div className="flr">
            <button className="action-bttn">Edit</button>
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
    </div> : <Loader/>
  }

}

export default PostDetails;