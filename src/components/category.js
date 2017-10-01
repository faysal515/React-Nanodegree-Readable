import React from 'react';
import {withRouter} from 'react-router-dom'


const Category = (props) => {
  const {data} = props
  const currentRoute = props.match.params.id
  return (
    <div className="dib" onClick={() => props.history.push(`/category/${data.path}`)}>
      <div className={`category-name ${data.name === currentRoute ? 'active-category': ''}`}>{data.name}</div>
    </div>
  )
}

// Category.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withRouter(Category)
