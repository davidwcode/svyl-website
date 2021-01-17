import React from 'react';
import StudentCard from './StudentCard';
import Grid from '@material-ui/core/Grid';

const CardList = ({students}) => {
  const cards = students.map(student => {
    return (
      <Grid item xs = {0}>
      <StudentCard name={student.name} studentid={student.studentid} lastTestDate={student.lastTestDate} testImage = {student.testImage} currentstatus = {student.currentstatus}  />
      </Grid>);
  });

  return (
    <div>
      <Grid container spacing={4}>
        {cards}
      </Grid>
    </div>
  );
  
}

export default CardList;
