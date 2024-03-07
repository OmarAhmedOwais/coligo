import React from 'react';
import { Button } from '@material-ui/core';
import Sidebar from '../../Sidebar';
import Welcome from '../../Welcome';
import Exams from '../../Exams';
import './index.css';

const Dashboard = ({ onLogout }) => {
  return (
    <div>
      <Sidebar />
      <div className="welcome-message">
        <Welcome />
        <Button onClick={onLogout}>Logout</Button>
      </div>
      <Exams />
    </div>
  );
};

export default Dashboard;