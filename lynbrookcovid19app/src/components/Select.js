import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import StudentList from './StudentList';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect(props) {
  const classes = useStyles();
  const [status, setStatus] = useState('');
  let filter = props.profiles.filter( (student) => student.currentstatus.includes(status))
  const [open, setOpen] = useState(false);
  useEffect(() => {
    filter = props.profiles.filter( (student) => student.currentstatus.includes(status))
  }, [status])
  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  //console.log(props.profiles);

  return (
    <div>
      <Button className={classes.button} onClick={() => handleOpen}>
        Sort by Status
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Status</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={status}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Cleared">Cleared</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Uncleared">Uncleared</MenuItem>
        </Select>
      </FormControl>
      <div>
        <StudentList students = {filter} cardsPerPage = {4}/>
      </div>
    </div>
  );
}