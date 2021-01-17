import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from './Select';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100ch',
    },
  },
}));

export default function SearchBar(props) {
  const classes = useStyles();
  const [term, setTerm] = useState('');
  const [results, setResults] = useState(props.profiles);
  useEffect(() => {
    console.log(term);
    if (!term) {
      setResults(props.profiles)
    }
    const search = async () => {
      if (/\d+/g.test(term)) {
        const data = props.profiles.filter(profile => profile.studentid.toString().startsWith(term));
        setResults(data);
      } else {
        const data = props.profiles.filter(profile => profile.name.toLowerCase().startsWith(term.toLowerCase()));
        setResults(data);
      }
    }
    if (term) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 500)
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state.term);
  }
  if (!results) {
    setResults(props.profiles);
  }
  console.log({results});
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField 
          id="outlined-search-small"
          label="Search..."
          variant = "outlined"
          size = "small"
          helperText="Search by name or student ID"
          //defaultValue = {term}
          onChange = {e => setTerm(e.target.value)}
        />
      </form>
      <Select profiles = {results}></Select>

    </div>

  );
}