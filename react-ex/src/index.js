// ./src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
//import {HashRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './Components/App';





ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root'));

//serviceWorker.unregister();