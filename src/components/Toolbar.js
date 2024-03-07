import React from "react";
import { AppBar, Toolbar, Typography, InputBase, IconButton, Badge, Button } from "@material-ui/core";
import { makeStyles, alpha } from "@material-ui/core/styles";
import { Search as SearchIcon, Notifications as NotificationsIcon, Mail as MailIcon, AccountCircle } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: `calc(100% - 240px)`,
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
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  notification: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
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

const ToolBar=()=> {
  const classes = useStyles();

  return (
    <AppBar position='absolute' className={classes.appBar}>
      <Toolbar>
        <Typography variant='h6' noWrap>
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
  );
}

export default ToolBar;
