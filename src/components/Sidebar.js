import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

const Sidebar = () => {
  return (
    <List>
      <ListItem button>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Schedule" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Courses" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Gradebook" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Performance" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Announcement" />
      </ListItem>
    </List>
  );
};

export default Sidebar;