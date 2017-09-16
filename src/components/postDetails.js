import React, {Component} from 'react'
import {getReadableDate} from '../utils'
import Loader from './loader'
import Comment from './comment'
import CommentBox from './commentBox'
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
    console.log('>>>.', this.props.post)
    const list = this.props.post.comments[id]
    return list ? list.map(l => <Comment key={l.id} data={l}/>) : null
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
            <span className="like-count">5</span>
            <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" preserveAspectRatio="xMidYMid"
                         className="like-bttn">
                        <path fill="#C03A2B"
                              d="M25 10c2-4.7 6.5-8 11.8-8 7.3 0 12.5 6.2 13 13.5 0 0 .5 2-.3 5.2-1 4.4-3.5 8.4-7 11.5L25 48 7.3 32.2c-3.4-3-5.8-7-7-11.5-.7-3.3-.3-5.2-.3-5.2C.8 8.2 6 2 13.3 2 18.6 2 23 5.3 25 10z"/><path
                      fill="#ED7161"
                      d="M6 18c-.6 0-1-.4-1-1C5 11.7 9.5 7 15 7c.6 0 1 .5 1 1s-.4 1-1 1c-4.4 0-8 3.7-8 8 0 .6-.4 1-1 1z"/>
                    </svg>
              </span>
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