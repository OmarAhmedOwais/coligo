import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import '../index.css';

const Exams = () => {
  return (
    <div className="exams-container">
      <List>
        <ListItem button>
          <ListItemText primary="Unit 1 quiz" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Unit 2 quiz" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Unit 3 quiz" />
        </ListItem>
      </List>
    </div>
  );
};

export default Exams;