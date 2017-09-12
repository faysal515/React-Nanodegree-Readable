import React, {Component} from 'react'
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import { withStyles } from 'material-ui/styles';
import Select from 'react-select'
import Category from './category'
import PostCard from './postCard'
import Loader from './loader'
const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
    // marginLeft: 30
  },
  button: {
    margin: theme.spacing.unit,
  },
});


class Home extends Component {
  state = {
    selectedSort : { value: 'maximum', label: 'max vote' },
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
    const classes = this.props.classes
    let options = [
      { value: 'maximum', label: 'max vote' },
      { value: 'minimum', label: 'min vote' },
      { value: 'newest', label: 'newest' },
      { value: 'oldest', label: 'oldest' }
    ];
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {this.renderCategories()}
        </Grid>
        <Select
          name="sort-selection"
          options={options}
          value={this.state.selectedSort}
          onChange={this.selectSort.bind(this)}
        />
        <Grid container spacing={24}>
          {this.renderPosts()}
        </Grid>
        <Button fab color="primary" aria-label="add" className={classes.button} onClick={() => this.props.history.push('/create')}>
          <AddIcon />
        </Button>
      </div>


    )
  }
}

export default withStyles(styles)(Home)