import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import "../../index.css";
import { useGetAllExamsQuery } from "../../api/exams.api";
const Exams = () => {
  const { isLoading, data, isError } = useGetAllExamsQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <div className='exams-container'>
      <List>
        {data.data.map((exam, index) => (
          <ListItem button key={index}>
            <ListItemText
              primary={`${exam?.title} - ${exam?.duration}`}
              secondary={exam?.sections.map((section, index) => (
                <React.Fragment>
                  <b>{section?.title}</b> - {section?.marks} Marks
                  <br />
                </React.Fragment>
              ))}
            />
            <ListItemText primary={`Total Mark: ${exam?.totalMarks}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Exams;
