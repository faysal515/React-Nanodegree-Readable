import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import FavoriteIcon from 'material-ui-icons/Favorite';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  card: {
    minWidth: 275,
    cursor: 'pointer'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});

const PostCard = (props) => {
  const classes = props.classes;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid item xs={12} md={6} >
      <Card className={classes.card} onClick={() => console.log('click')}>
        <CardContent>
          <Typography type="body1" className={classes.title}>
            September 14, 2017 Thursday
          </Typography>
          <Typography type="headline" component="h2">
            Introduction to React
          </Typography>
          <Typography type="body1" className={classes.pos}>
            Faysal Ahmed
          </Typography>
          <Typography component="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias harum ipsum maiores sint sit voluptate.
          </Typography>

        </CardContent>
        {<CardActions>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon color="red" />
            24
          </IconButton>

        </CardActions>}
      </Card>
    </Grid>


  );
}

PostCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostCard);