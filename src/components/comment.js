import React, {Component} from 'react'
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
            </div>
            <div className="m-top-1p5">
              <div className="fll">
                <span className="like-count">{data.voteScore}</span>
                <span onClick={e => console.log('..')}>
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
                <button className="action-bttn">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
