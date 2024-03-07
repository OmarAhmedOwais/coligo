import React from 'react';
import { Button } from '@material-ui/core';
import { Navigate } from 'react-router-dom';
import Sidebar from '../../Sidebar';
import Welcome from '../../Welcome';
import Exams from '../../Exams';
import './index.css';

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };



  return isLoggedIn ? (
    <Navigate to="/dashboard" />
  ) : (
    <div>
      <Sidebar />
      <div className="welcome-message">
        <Welcome />
        <Button onClick={handleLogin}>Login</Button>
      </div>
      <Exams />
    </div>
  );
};

export default HomePage;