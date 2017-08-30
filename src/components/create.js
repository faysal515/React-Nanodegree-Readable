import React, {Component} from 'react'
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import { FormControl, FormGroup, FormControlLabel } from 'material-ui/Form'
import Input from 'material-ui/Input/Input';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import Category from './category'
import PostCard from './postCard'
import Loader from './loader'


export default class CreatePost extends Component {
  render() {
    return(
      <div>
        <TextField
          id="helperText"
          label="Helper text"
          helperText="Some important text"
          margin="normal"
        />
        <Button raised onClick={(e) => console.log(this.refs.helperText.value)}>Nice</Button>
      </div>



    )
  }
}