import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './APP/App.jsx';
import "../node_modules/bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
    < BrowserRouter >
    <App/>
    </ BrowserRouter >,
    document.querySelector('#root')
);

