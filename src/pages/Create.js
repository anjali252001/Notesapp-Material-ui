import React ,{useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import {FormControlLabel, makeStyles} from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import { RadioGroup } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {useNavigate} from 'react-router-dom';

const useStyles =makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
});

export default function Create() {
  const classes=useStyles();
  const history = useNavigate();
const [title , setTitle] =useState("");
const [details, setDetails] = useState("");
const [titleError ,setTitleError]= useState(false);
const [detailsError, setDetailsError] =useState(false);
const [category, setCategory] =useState("todos");
const handleSubmit=(e)=>{
  e.preventDefault();
  setTitleError(false)
  setDetailsError(false)

  if(title ===""){
    setTitleError(true);
  }
  if(details === ""){
    setDetailsError(true);
  }
  if(title && details){
    fetch('http://localhost:8000/notes',{
      method:'POST',
      headers :{"Content-type" :"application/json"},
      body:JSON.stringify({title ,details, category})
    }).then(()=>history('/'));
  }

}

  return (
    <Container>
      <Typography 
      className={classes.title}
      variant="h1"
      color="textSecondary"
     component="h2"
      gutterBottom
      >
       Create New Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
        onChange={(e)=>{setTitle(e.target.value)}}
        className={classes.field}
          label="note title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
        />
        <TextField
        onChange={(e)=>{setDetails(e.target.value)}}
        className={classes.field}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows ={4}
          fullWidth
          required

        />
        <FormControl className={classes.field}>
        <FormLabel>Note Category</FormLabel>
        <RadioGroup value={category} onChange={(e)=>{setCategory(e.target.value)}}>
      <FormControlLabel value="money" control={<Radio/>} label="Money" />
      <FormControlLabel value="todos" control={<Radio/>} label="Todos" />
      <FormControlLabel value="reminder" control={<Radio/>} label="Reminder" />
      <FormControlLabel value="work" control={<Radio/>} label="Work" />
      
</RadioGroup>
</FormControl>
      <Button 
      color="primary"
     
      type="submit" 
      
      variant="contained"
      endIcon={<KeyboardArrowRightIcon/>}
      
      >Submit</Button>
      </form>
      <br/>

      <AcUnitOutlinedIcon />
      <AcUnitOutlinedIcon color="secondary" fontSize="large" />

      
      {/* <ButtonGroup color="secondary" variant="contained">
        <Button>Two</Button>
        <Button>Three</Button>
        <Button>Four</Button>
      </ButtonGroup> */}
    </Container>
  )
}
