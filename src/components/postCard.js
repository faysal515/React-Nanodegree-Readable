import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import moment from 'moment'
import {getReadableDate} from '../utils'


const PostCard = (props) => {
  const {data} = props
  return (

        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 post-wrap marpadzero">
          <div className="post-card pcard">
            <div className="pcard-od">
              <div className="pcard-od-front">
                <p className="post-date">{getReadableDate(data.timestamp)}</p>
                <p className="post-title"><b><Link to={`/post/${data.id}`} >{data.title}</Link></b></p>
                <p className="post-author">
                  {`by ${data.author}`}
                </p>
                <p>
                  {data.body}
                </p>
                <div className="post-like">
                  <span>{data.voteScore}</span><span><img src="" alt=""/></span>
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

export default PostCard;