import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import App from "./App.js";
import { store } from "./api/store.js";
import reportWebVitals from './reportWebVitals';

// Use createRoot instead of render
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use render instead of hydrate
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
