import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";


const root = ReactDOM.createRoot(document.getElementById('root'));


const options = {
  timeout: 5000,
  position: positions.TOP_CENTER
};


root.render(
  <React.StrictMode>
    <Provider template={AlertTemplate} {...options}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
