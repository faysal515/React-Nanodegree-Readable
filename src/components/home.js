import React, {Component} from 'react'
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import { withStyles } from 'material-ui/styles';
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

  render() {
    const classes = this.props.classes
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {this.renderCategories()}
        </Grid>
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