import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import User from './User';


import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
const user = { name: "Test", avatar: "https://joeschmoe.io/api/v1/test", email: "test@test.com", city: "Odessa", dob: "21.01.2000" }
root.render(
  <React.StrictMode>
    <User user={user}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
