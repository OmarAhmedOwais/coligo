import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Sidebar from "../../Layout/Sidebar";
import Welcome from "../Welcome";
import Exams from "../Exams";
import Announcements from "../Announcement";
import ToolBar from "../../Layout/Navbar";
import { Box, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
const Dashboard = ({ onLogout }) => {
  const classes = useStyles();
  return (
      <Box className={classes.root}>
      <Box>
        <Sidebar />
      </Box>
      <Box className={classes.content} height={"80vh"}>
        <ToolBar />
        <Box>
          <Grid  container spacing={2}  alignItems="stretch"  >
            <Grid item xs={8} spacing={4} >
              <Welcome />
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Announcements />
            </Grid>
            <Grid item xs={4}>
              <Exams />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;