import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';
import axios from 'axios';
import { useHistory } from 'react-router';

axios.defaults.baseURL="https://localhost:5001/api"
// axios.defaults.baseURL="https://lsmsuor.azurewebsites.net/api"

axios.interceptors.request.use((config)=>{
  const token=localStorage.getItem('auth')?JSON.parse(localStorage.getItem('auth')).user.accessToken:null;
  if(token) config.headers.Authorization = `Bearer ${token}`
  return config
}, error=>{
  return Promise.reject(error)
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
