import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import FavoriteIcon from 'material-ui-icons/Favorite';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import moment from 'moment'
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
//moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
const PostCard = (props) => {
  const {classes, data} = props;
  const bull = <span className={classes.bullet}>•</span>;
  const firstSentence = data.body.indexOf('.')

  return (
    <Grid item xs={12} md={6} >
      <Card className={classes.card} onClick={() => console.log('click')}>
        <CardContent>
          <Typography type="body1" className={classes.title}>
            {/*September 14, 2017 Thursday*/}
            {`${moment(data.timestamp).format('MMMM Do YYYY, dddd')}`}
          </Typography>
          <Typography type="headline" component="h2">
            {`${data.title}`}
          </Typography>
          <Typography type="body1" className={classes.pos}>
            {`by ${data.author}`}
          </Typography>
          <Typography component="p">
            {firstSentence > 0 ? `${data.body.substr(0,firstSentence)}` : `${data.body.substr(0,10)}....`}
          </Typography>

        </CardContent>
        {<CardActions>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon color="red" />
            {data.voteScore}
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