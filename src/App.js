import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Sidebar from "./components/Sidebar";
import Welcome from "./components/Welcome";
import Exams from "./components/Exams";
import ToolBar from "./components/Toolbar";
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

function App() {
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
              <Exams />
            </Grid>
            <Grid item xs={4}>
              <Exams />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
