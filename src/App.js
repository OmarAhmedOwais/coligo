import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Sidebar from "./components/Sidebar";
import Welcome from "./components/Welcome";
import Exams from "./components/Exams";
import ToolBar from "./components/Toolbar";

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
    <div className={classes.root}>
      <Sidebar />
      <main className={classes.content}>
        <ToolBar />
        <Welcome />
        <Exams />
      </main>
    </div>
  );
}

export default App;
