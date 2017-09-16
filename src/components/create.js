import React, {Component} from 'react'
import Category from './category'
import PostCard from './postCard'
import Loader from './loader'
import Select from 'react-select'
export default class CreatePost extends Component {
  state = {
    selectedCategory: ''
  }

  logChange(val) {
    console.log("Selected: " + JSON.stringify(val));
    this.setState({selectedCategory: val})
  }

  render() {
    let options = [
      {value: 'one', label: 'cate 1'},
      {value: 'two', label: 'cate 2'},
      {value: 'three', label: 'cate 3'}
    ];
    return (
      <Select
        name="category-select"
        options={options}
        value={this.state.selectedCategory}
        onChange={this.logChange.bind(this)}
      />
    )
  }
}