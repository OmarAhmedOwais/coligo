import React from "react";
import { Button } from "@material-ui/core";
import Welcome from "../Welcome";
import "../../../index.css";
import { useDispatch } from "react-redux";
import { login } from "../../../utils/auth";

const HomePage = () => {
  const dispatch = useDispatch()

  const handleLogin = () => {
    dispatch(login());
  };

  return(
  <div>
      <Welcome />
      <Button onClick={handleLogin}>Login</Button>
  </div>
  )
};

export default HomePage;
