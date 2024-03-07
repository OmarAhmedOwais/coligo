import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Use createRoot instead of render
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use render instead of hydrate
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
