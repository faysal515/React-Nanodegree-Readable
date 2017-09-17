import React, {Component} from 'react'
import {UpArrow, DownArrow} from './icons'
import {dateForComment} from '../utils'
export default class Comment extends Component {
  render() {
    const {data} = this.props
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
              {data.body}
              {/*<textarea name="" id="" cols="120" rows="3" className="form-control" />*/}
            </div>
            <div className="m-top-1p5 m-bot-3">
              <div className="fll">
                <span className="like-count">{data.voteScore}</span>

                <UpArrow onClick={() => this.props.voteComment(data.id,'upVote')} />
                <DownArrow onClick={() => this.props.voteComment(data.id,'downVote')} />
              </div>
              <div className="flr">
                <button className="action-bttn">Edit</button>
                <button className="action-bttn">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
