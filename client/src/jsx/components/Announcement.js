import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import '../../index.css';
import { useGetAllAnnouncementsQuery } from '../../api/announcements.api';

const Announcements = () => {
  const{isLoading,data,isError}=useGetAllAnnouncementsQuery()
  if(isLoading){
    return <div>Loading...</div>
  }
  if(isError){
    return <div>Error</div>
  }
  return (
    <div className="announcements-container">
      <List>
          {data.map((announcement)=>(
        <ListItem button  key={announcement.id}>
            <ListItemText primary={`${announcement.title} - ${announcement.date}`} />
        </ListItem>
          ))}
      </List>
    </div>
  );
};

export default Announcements;