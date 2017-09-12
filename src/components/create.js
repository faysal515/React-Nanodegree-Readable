import React, {Component} from 'react'
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import { FormControl, FormGroup, FormControlLabel } from 'material-ui/Form'
import InputLabel from 'material-ui/Input/InputLabel'
import TextArea from 'material-ui/Input/Textarea';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
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
    this.setState({selectedCategory:val})
  }
  render() {
    var options = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' },
      { value: 'three', label: 'Three' }
    ];
    return(
      <Grid container justify="center">
        <Grid item xs={12}>
          <TextField
            label="Title"
            helperText="catchy and precise please :)"
            margin="normal"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Description"
            multiline={true}
            rows={4}
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} md={4}>

          <Select
            name="form-field-name"
            options={options}
            value={this.state.selectedCategory}
            onChange={this.logChange.bind(this)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button raised color="primary" onClick={(e) => console.log(`testing`)}>Submit</Button>
        </Grid>

      </Grid>



    )
  }
}