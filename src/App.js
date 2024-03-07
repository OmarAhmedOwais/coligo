// App.js
import React from "react";
import { AppBar, Toolbar, Typography,InputBase,IconButton,Badge,Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Sidebar from "../src/components/Sidebar";
import Welcome from "../src/components/Welcome";
import Exams from "../src/components/Exams";
import {Search as SearchIcon,Notifications as NotificationsIcon ,Mail as MailIcon,AccountCircle } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    width: `calc(100% - 240px)`,
    marginLeft: 240,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root} position='relative'>
      <AppBar position='absolute' className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title} variant='h6' noWrap>
            Welcome, John Doe
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <IconButton color='inherit' className={classes.notification}>
            <Badge badgeContent={4} color='secondary'>
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color='inherit' className={classes.mailIcon}>
            <Badge badgeContent={4} color='secondary'>
              <MailIcon />
            </Badge>
          </IconButton>
          <Button color='inherit' className={classes.login}>Login</Button>
          <IconButton edge='end' color='inherit' className={classes.accountCircle}>
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Sidebar />
      <main className={classes.content}>
        <Welcome />
        <Exams />
      </main>
    </div>
  );
}

export default App;