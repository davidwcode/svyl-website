import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ClearIcon from '@material-ui/icons/Clear';
import CheckIcon from '@material-ui/icons/Check';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';


const StudentCard = ({name, studentid, lastTestDate, testImage, currentstatus}) => {

  const useStyles = makeStyles({
    root: {
      minWidth: 275
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    media: {
      height: 300,
    },
    card: {
      maxWidth: 300,
      margin: "auto",
      marginBottom: 12,
      transition: "0.3s",
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
      }
    },
    icon: {
      position: "relative",
      right: 10,
      top: 10,
      color: "blue",
      clear: {
        color: "green",
      },
      cross: {
        color: "red",
      },

    }

  });

  const classes = useStyles();
  return(
    <div>
      <Card className = {classes.card}>
        <CardContent>
          <Typography variant = "h6" gutterBottom>
            Name: {name}     

              {lastTestDate > 7
              ? <div className = {classes.icon}> <ClearIcon/> </div> 
              : <div className = {classes.icon}> <CheckIcon/> </div>
              }

          </Typography>
          <Typography variant = "h6" gutterBottom>
            Student ID: {studentid}
          </Typography>
          <Typography variant = "h6" gutterBottom>
            Last Tested: {lastTestDate} days ago
          </Typography>
          <Typography variant = "h6" gutterBottom>
            Status: {currentstatus} 
          </Typography>

        </CardContent>
        <CardActionArea href = {testImage}>
          <CardMedia
            className={classes.media}
            image= {testImage}
            title="Covid19 Test"
          />

        </CardActionArea>

      </Card>
    </div>
  )
}

export default StudentCard;
