import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getCategories} from '../actions/category'
import {getPostsById, createPost} from '../actions/posts'
import serialize from 'form-serialize'
import {success, error} from 'react-notification-system-redux';
import uuidv1 from 'uuid/v1'
import queryString from 'query-string'
import Select from 'react-select'
import intersection from 'lodash/intersection'


class CreatePost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCategory: '',
      isEditing: queryString.parse(props.location.search).edit
    }
  }

  componentDidMount() {
    const {isEditing} = this.state
    this.props.getCategories()
    console.log('STATE ', this.state)
    if (isEditing)
      this.props.getPost(isEditing)
        .then(res => {
          console.log('>> ', res)
          this.setState({selectedCategory: {value: res.category, label: res.category}})
        })
        .catch(e => this.props.history.push('/'))
  }

  logChange(val) {
    console.log("Selected: " + JSON.stringify(val));
    this.setState({selectedCategory: val})
  }

  handleSubmit(event) {
    event.preventDefault()
    let form = document.querySelector('#create-post'),
      formData = serialize(form, {hash: true}),
      data = {
        ...formData,
        id: uuidv1(),
        timestamp: Date.now()
      }


    let validate = this.validator(data)
    if (!validate) {
      this.props.error({
        title: 'Sorry :(',
        message: 'Please check your input fields properly',
        position: 'tr',
        autoDismiss: 2,
      })

      return
    }


    this.props.createPost(data).then(res => {
      form.reset()
      this.props.success({title: 'post saved', autoDismiss: 2})
      this.props.history.push(`/`)
    })
      .catch(e => {
        this.props.error({
          title: 'Sorry :(',
          message: 'Server fails to insert data. please try later',
          position: 'tr',
          autoDismiss: 2,
        })
      })

  }

  validator(data) {
    let requiredKeys = ['title', 'author', 'body', 'category'],
      dataKeys = Object.keys(data)

    return intersection(requiredKeys, dataKeys).length === requiredKeys.length


  }

  render() {
    let categories = this.props.category.list,
      options = categories ? categories.map(c => {
        return {value: c.name, label: c.name}
      }) : []

    let {isEditing} = this.state,
      {post} = this.props.post
    //isEditing && this.props
    return (isEditing && post) || !isEditing ?
      <div className="container m-top-3">
        <div>
          <h3 className="m-bot-3"><b>Create Post</b></h3>
          <form id="create-post">
            <div className="form-group">
              <label htmlFor="exampleInput1">Title</label>
              <input defaultValue={post && isEditing ? post.title : ''} type="text" className="form-control"
                     name="title"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInput2">Author</label>
              <input type="text" defaultValue={post && isEditing ? post.author : ''} className="form-control"
                     name="author"/>
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              {categories
                ?
                <Select
                  name="category"
                  options={options}
                  value={this.state.selectedCategory}
                  onChange={this.logChange.bind(this)}
                /> : null
              }

            </div>
            <div className="form-group">
              <label htmlFor="exampleInputDescription">Body</label>
              <textarea defaultValue={post && isEditing ? post.body : ''} className="form-control" name="body" id=""
                        cols="30" rows="10"/>
            </div>
            <button type="submit" className="btn btn-default" onClick={this.handleSubmit.bind(this)}>Submit</button>
          </form>
        </div>
      </div> : null

  }
}

const mapStateToProps = (store, ownProps) => {
  return {
    category: store.category,
    post: store.post
  }

}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCategories: () => dispatch(getCategories()),
    createPost: (data) => dispatch(createPost(data)),
    getPost: (id) => dispatch(getPostsById(id)),
    error: (opt) => dispatch(error(opt)),
    success: (opt) => dispatch(success(opt))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)