import React, {Component} from 'react'
import {connect} from 'react-redux'
import Home from '../components/home';
import {getCategories} from '../actions/category'
import {getPostsByCategory} from '../actions/posts'

class CategoryViewContainer extends Component {

  componentDidMount() {
    const category = this.props.match.params.id
    this.props.getCategories()
    this.props.getPostsByCategory(category)
  }
  componentWillReceiveProps(nextProps) {
    console.log('change', this.props.match, nextProps.match)
    if(this.props.match.params.id !== nextProps.match.params.id) {
      this.props.getPostsByCategory(nextProps.match.params.id)
    }
  }
  render() {
    return (
      <Home {...this.props}/>
    )
  }
}

const mapStateToProps = (store,ownProps) => {
  return {
    category: store.category,
    post: store.post
  }
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    getCategories : () => dispatch(getCategories()),
    getPostsByCategory: (id) => dispatch(getPostsByCategory(id)),
    changeSort: (sortBy) => dispatch({type:'SORT_BY_SOMETHING', payload: sortBy})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryViewContainer)