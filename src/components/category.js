import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import {withStyles} from 'material-ui/styles';
import { withRouter } from 'react-router-dom'
// import Card, {CardActions, CardContent} from 'material-ui/Card';
// import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  paper: {
    padding: 16,
    cursor: 'pointer',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});
const Category = (props) => {
  const {classes, data} = props
  return (
    <Grid item xs={6} md={3}>
      <Paper onClick={() => props.history.push(`/${data.path}`)} className={classes.paper} elevation={4}>
        <Typography type="headline" component="h3">
          {data.name}
        </Typography>
      </Paper>


    </Grid>
  )
}

Category.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Category));