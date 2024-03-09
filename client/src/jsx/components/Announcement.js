import React from 'react';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
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
    <div className="exams-container">
      <List>
        {data.data.map((announcement, index) => (
          <ListItem button key={index}>
            <ListItemAvatar>
              <Avatar alt={announcement.user.name} src={announcement.user.image} />
            </ListItemAvatar>
            <ListItemText
              primary={`${announcement.user.name} - ${announcement.title}`}
              secondary={`Course: ${announcement.user.courseName}, Department: ${announcement.user.department}`}
            />
            <ListItemText primary={`Content: ${announcement.content}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Announcements;