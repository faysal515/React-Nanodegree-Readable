import React, {Component} from 'react'
import Category from './category'
import Loader from './loader'
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
    // marginLeft: 30
  }
});


class Home extends Component {

  renderCategories() {
    const {list} = this.props.category
    return list ? list.map((ct,i) => {
      return <Category key={i} data={ct}/>
      }) : <Loader/>
  }

  render() {
    const classes = this.props.classes
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {this.renderCategories()}
        </Grid>
      </div>


    )
  }
}

export default withStyles(styles)(Home)