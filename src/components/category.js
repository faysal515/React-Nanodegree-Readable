import React from 'react';
import PropTypes from 'prop-types';
import {withRouter, Link} from 'react-router-dom'

//onClick={() => props.history.push(`/category/${data.path}`)}
const Category = (props) => {
  const {data} = props
  return (
    <div className="dib" onClick={() => props.history.push(`/category/${data.path}`)}>
      <div className="category-name">{data.name}</div>
    </div>
  )
}

// Category.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withRouter(Category)
