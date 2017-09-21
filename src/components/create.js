import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getCategories} from '../actions/category'
import { createPost } from '../actions/posts'
import serialize from 'form-serialize'
import Notifications, { success,error } from 'react-notification-system-redux';
import uuidv1 from 'uuid/v1'
import Loader from './loader'
import Select from 'react-select'


class CreatePost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCategory: ''
    }
  }

  componentDidMount() {
    this.props.getCategories()
  }

  logChange(val) {
    console.log("Selected: " + JSON.stringify(val));
    this.setState({selectedCategory: val})
  }

  handleSubmit(event) {
    event.preventDefault()
    let form = document.querySelector('#create-post')
    let data = serialize(form, {hash: true})
    // console.log(data,this)
    /*this.props.error({
      title: 'Sorry :(',
      message: 'Please check your input fields properly',
      position: 'tr',
      autoDismiss: 2,
    })*/
    
    this.props.createPost({
      ...data,
      id: uuidv1(),
      timestamp: Date.now()
    }).
      then(res => {
      form.reset()
      this.props.success({title: 'post saved', autoDismiss:2})
      this.props.history.push(`/`)
    })
      .catch(e => {
        this.props.error({
          title: 'Sorry :(',
          message: 'Please check your input fields properly',
          position: 'tr',
          autoDismiss: 2,
        })
      })
    
  }

  render() {
    /*let options = [
      {value: 'one', label: 'cate 1'},
      {value: 'two', label: 'cate 2'},
      {value: 'three', label: 'cate 3'}
    ];*/
    let categories = this.props.category.list,
      options = categories ? categories.map(c => {
      return {value: c.name, label : c.name}
      }) : []

    console.log(options)


    return (
        <div className="container m-top-3">
            <div>
                <h3 className="m-bot-3"><b>Create Post</b></h3>
                <form id="create-post">
                    <div className="form-group">
                        <label htmlFor="exampleInput1">Title</label>
                        <input type="text" className="form-control" name="title"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInput2">Author</label>
                        <input type="text" className="form-control" name="author"/>
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
                        <textarea className="form-control" name="body" id="" cols="30" rows="10"/>
                    </div>
                    <button type="submit" className="btn btn-default" onClick={this.handleSubmit.bind(this)}>Submit</button>
                </form>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (store,ownProps) => {
  return {
    category: store.category
  }

}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    getCategories : () => dispatch(getCategories()),
    createPost: (data) => dispatch(createPost(data)),
    error: (opt) => dispatch(error(opt)),
    success: (opt) => dispatch(success(opt))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreatePost)