import React from 'react';
import { Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
}));

const Welcome = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Typography variant="h4" className={classes.title}>
          Welcome, Talia
        </Typography>
        <Typography variant="body1">
          EXAMS TIME
          <br />
          Here we are, Are you ready to fight? Don't worry, we prepared some tips to be ready for your exams.
          <br />
          <br />
          "Nothing happens until something moves - Albert Einsten"
          <br />
          <br />
          View exams tips
        </Typography>
      </Container>
    </div>
  );
};

export default Welcome;