import React, {Component} from 'react'
import Select from 'react-select'
import Loader from './loader'
import PostCard from './postCard'
import Category from './category'
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedSort: ''
    }
  }
  renderCategories() {
    const {list} = this.props.category
    return list ? list.map((ct,i) => {
      return <Category key={i} data={ct}/>
      }) : <Loader/>
  }

  renderPosts() {
    const {sorted} = this.props.post
    return sorted ? sorted.map((pc,i) => {
        return <PostCard key={i} data={pc}/>
      }) : <Loader/>
  }

  selectSort(val) {
    console.log("Selected: " + JSON.stringify(val));
    this.setState({selectedSort:val})
    this.props.changeSort(val.value)
  }

  render() {
    let options = [
      { value: 'maximum', label: 'max vote' },
      { value: 'minimum', label: 'min vote' },
      { value: 'newest', label: 'newest' },
      { value: 'oldest', label: 'oldest' }
    ];
    return (
      <div className="container">
        {this.renderCategories()}
        <Select
          name="sort-selection"
          options={options}
          value={this.state.selectedSort}
          onChange={this.selectSort.bind(this)}
          className="select-sort m-bot-3"
        />
        {this.renderPosts()}
      </div>


    )
  }
}

export default Home