// Sidebar.js
import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import ScheduleIcon from "@material-ui/icons/Schedule";
import SchoolIcon from "@material-ui/icons/School";
import GradesIcon from "@material-ui/icons/Grade";
import AssessmentIcon from "@material-ui/icons/Assessment";
import NotificationsIcon from "@material-ui/icons/Notifications";

const useStyles = makeStyles((theme) => ({
  drawer: { width: 240, flexShrink: 0 },
  drawerPaper: { width: 240, backgroundColor: "#ffff"  },
  logo: {
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  listItem: { "&:hover": { backgroundColor:  "#6a79c8" } },
}));

const Sidebar = () => {
  const classes = useStyles();

  const listItems = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "Schedule", icon: <ScheduleIcon /> },
    { text: "Courses", icon: <SchoolIcon /> },
    { text: "Gradebook", icon: <GradesIcon /> },
    { text: "Performance", icon: <AssessmentIcon /> },
    { text: "Announcement", icon: <NotificationsIcon /> },
  ];

  return (
    <Drawer
      className={classes.drawer}
      variant='permanent'
      classes={{ paper: classes.drawerPaper }}
    >
      {" "}
      <div className={classes.logo}>
        {" "}
        <Typography variant='h6' noWrap>
          {" "}
          Coligo{" "}
        </Typography>{" "}
      </div>{" "}
      <List>
        {" "}
        {listItems.map((item, index) => (
          <ListItem button key={item.text} className={classes.listItem}>
            {" "}
            <ListItemIcon>{item.icon}</ListItemIcon>{" "}
            <ListItemText primary={item.text} />{" "}
          </ListItem>
        ))}{" "}
      </List>{" "}
    </Drawer>
  );
};

export default Sidebar;
