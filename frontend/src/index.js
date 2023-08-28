import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../src/assets/vendor/css/rtl/core.css'
import '../src/assets/vendor/css/rtl/theme-default.css'
import '../src/assets/css/demo.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
