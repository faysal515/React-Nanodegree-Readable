import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import {HeartIcon} from './icons'

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
                  <span>{data.voteScore}</span>
                    <span>
                      <HeartIcon/>
                        {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125" preserveAspectRatio="xMidYMid" className="like-icon">
                            <path d="M31.5 14C18 14 9 24.7 9 38.3c0 23.4 17.6 33 41 47.7 23.4-14.6 41-24.3 41-47.7C91 24.7 82 14 68.5 14 60 14 53 19 50 21.8c-3-3-10-7.8-18.5-7.8z" overflow="visible" color="#000"/>
                        </svg>*/}
                    </span>
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