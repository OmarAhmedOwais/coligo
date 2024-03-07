// Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText,Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant='permanent'
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.logo}>
        <Typography variant='h6' noWrap>
          Coligo
        </Typography>
      </div>
      <List>
        {["Home", "Schedule", "Courses", "Gradebook", "Announcement"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </Drawer>
 
  );
};

export default Sidebar;
