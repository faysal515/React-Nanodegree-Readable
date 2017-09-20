import React, {Component} from 'react'
import {UpArrow, DownArrow} from './icons'
import {dateForComment} from '../utils'
export default class Comment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false
    }
  }

  handleEditComment(id) {
    let data = {
      timestamp: Date.now(),
      body: this.refs.comment.value
    }
    this.props.editComment(id,data)
      .then(r =>{
        this.setState({isEditing: false})
      })

  }
  render() {
    const {data} = this.props;
    let {isEditing} = this.state
    return (
      <div className="m-top-10">
        <div className="comment-show">
          <div className="pos-rel">
            <div>
              <p className="commentee-name">
                {data.author}
              </p>
              <p className="commentee-date">
                {dateForComment(data.timestamp)}
              </p>
            </div>
            <div>
              {
                isEditing ? <textarea ref="comment" defaultValue={data.body} cols="120" rows="3" className="form-control" />
                  : data.body
              }
            </div>
            <div className="m-top-1p5 m-bot-3">
              <div className="fll">
                <span className="like-count">{data.voteScore}</span>

                <UpArrow onClick={() => this.props.voteComment(data.id,'upVote')} />
                <DownArrow onClick={() => this.props.voteComment(data.id,'downVote')} />
              </div>
              <div className="flr">
                {isEditing ?
                  <button onClick={this.handleEditComment.bind(this,data.id)} className="action-bttn">Save</button> : null
                }

                <button disabled={isEditing ? 'disabled': ''} className="action-bttn"
                        onClick={() => this.setState({isEditing:true})}
                >
                  Edit
                </button>
                <button className="action-bttn" onClick={() => this.props.deleteComment(data.id)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
