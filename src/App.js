// App.js
import React from "react";
import { AppBar, Toolbar, Typography,InputBase,IconButton,Badge,Button } from "@material-ui/core";
import { makeStyles,alpha } from "@material-ui/core/styles";
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

  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "64px",
    backgroundColor: "#f5f5f5",
    padding: "0 16px",
  },
  search: {
    position: "absolute",
    right: 300,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  notification: {
    marginRight: theme.spacing(2),
    marginLeft : theme.spacing(2),
    position: "absolute",
    right: 0,
    display: "flex",
  },
  mailIcon: {
    marginRight: theme.spacing(2),
    position: "absolute",
    right: 50,
    display: "flex",
  },
  login: {
    marginRight: theme.spacing(2),
    position: "absolute",
    right: 200,
    display: "flex",
  },
  accountCircle: {
    position: "absolute",
    right: 150,
    display: "flex",
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