import React from 'react';
import PropTypes from 'prop-types';

//moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
const PostCard = (props) => {
  return (
    <div className="container">
      <div className="row m-top">
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 post-wrap">
          <div className="post-card pcard">
            <div className="pcard-od">
              <div className="pcard-od-front">
                <p className="post-date">14/09/2017</p>
                <p className="post-title"><b>Redux nanodegree</b></p>
                <p className="post-author">
                  Faysal Ahmed
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, quas.
                </p>
                <div className="post-like">
                  <span>5</span><span><img src="" alt=""/></span>
                </div>
              </div>
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