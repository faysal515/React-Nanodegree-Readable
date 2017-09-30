import React, {Component} from 'react'
import Select from 'react-select'
import Rodal from 'rodal'
import Loader from './loader'
import PostCard from './postCard'
import Category from './category'
import HomeNav from './homenav'
import 'rodal/lib/rodal.css';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedSort: '',
    }
  }

  renderCategories() {
    const {list} = this.props.category
    return list ? list.map((ct, i) => {
        return <Category key={i} data={ct}/>
      }) : <Loader/>
  }

  renderPosts() {
    const {sorted} = this.props.post
    return <div>
      <div className="row m-top">
        {
          sorted ? sorted.map((pc, i) => {
              return <PostCard
                key={i}
                data={pc}
                comments={this.props.post.comments}
                votePost={this.props.votePost}
                deletePost={this.props.deletePost}
              />
            })
            : <Loader/>
        }
      </div>
    </div>
  }

  selectSort(val) {
    console.log("Selected: " + JSON.stringify(val));
    this.setState({selectedSort: val})
    this.props.changeSort(val.value)
  }

  render() {
    let options = [
      {value: 'maximum', label: 'max vote'},
      {value: 'minimum', label: 'min vote'},
      {value: 'newest', label: 'newest'},
      {value: 'oldest', label: 'oldest'}
    ];
    return (
      <div>
        <div className="pad-3">
          <div className="row">
            <div className="col-lg-10">
              <div className="row">
                <div className="col-xs-10 col-md-3">
                  <h4>Sort Posts by Vote Count</h4>
                  <Select
                    name="sort-selection"
                    options={options}
                    value={this.state.selectedSort}
                    onChange={this.selectSort.bind(this)}
                    className="select-sort m-bot-3"
                  />
                </div>

              </div>

              {this.renderPosts()}
            </div>
            <div className="col-lg-2">
              <h4 className="m-left-1">Categories</h4>
              {this.renderCategories()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home