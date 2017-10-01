import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom'
import {HeartIcon, UpArrow, DownArrow, CommentIcon, EditIcon, DeleteIcon} from './icons'

import {getReadableDate} from '../utils'


const PostCard = (props) => {
  const {data, comments} = props,
    hasComment = Boolean(comments && comments[data.id])
  return (

    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 post-wrap marpadzero">
      <div className="post-card pcard">
        <div className="pcard-od">
          <div className="pcard-od-front">
            <p className="post-date">{getReadableDate(data.timestamp)}</p>
            <p className="post-title"><b><Link to={`/post/${data.id}`}>{data.title}</Link></b></p>
            <p className="post-author">
              {`by ${data.author}`}
            </p>
            <p>
              {data.body}
            </p>
            <span>{hasComment ? comments[data.id].length : 0} {hasComment && comments[data.id].length > 1 ? `comments` : `comment`}</span><span><CommentIcon/></span>

            <div className="post-bttns">
                <span onClick={() => props.history.push(`/create?edit=${data.id}`)}><EditIcon/></span>
                <span onClick={() => props.deletePost(data.id)}><DeleteIcon/></span>
              {/*<CommentIcon/>*/}
            </div>
              <div className="post-like">
                  <span className="number-position">{data.voteScore}</span>
                  <UpArrow onClick={() => props.votePost(data.id, 'upVote')}/>
                  <DownArrow onClick={() => props.votePost(data.id, 'downVote')}/>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
/*
PostCard.propTypes = {
  classes: PropTypes.object.isRequired,
};*/

export default withRouter(PostCard);