import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom'
import {HeartIcon, UpArrow, DownArrow} from './icons'

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
            <p>{hasComment ? comments[data.id].length : 0} {hasComment && comments[data.id].length > 1 ? `comments` : `comment`} </p>

            <div className="post-like">
              <span>{data.voteScore}</span>
              <UpArrow onClick={() => props.votePost(data.id, 'upVote')}/>
              <DownArrow onClick={() => props.votePost(data.id, 'downVote')}/>

              {/*<span>*/}
              {/*<HeartIcon/>*/}
              {/*</span>*/}
            </div>
            <div>
              <button type="button" className="btn btn-default" onClick={() => props.history.push(`/create?edit=${data.id}`)}>Edit</button>
              <button type="button" className="btn btn-danger" onClick={() => props.deletePost(data.id)}>Delete</button>

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