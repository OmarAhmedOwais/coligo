import React from "react";
import Dashboard from "./jsx/components/Dashboard";
import Home from "./jsx/components/Home";
import { useSelector } from "react-redux";

function App() {
 const isAuthenticated= useSelector ((state) => state.auth.isAuthenticated);
 if(isAuthenticated)
  return (
    <Dashboard/>
  );

  return(
    <Home/>
  )
}

export default App;
