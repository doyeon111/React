import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import reactRouter1 from './R_reactRouter';
import reactRouter2 from "./R_reactRouter2"; 


// css
import '../css/new.css';

// header
import HeaderAdmin from './Header/Header admin';

//login
import LoginForm from './LoginForm';

// footer
import Footer from './Footer/Footer';

class App extends Component {
  render () {
    return (
      <div className="App">
        <HeaderAdmin/> 
        <Route exact path='/' component={LoginForm} />
        <Footer/>
      </div>
    );
  }
}

export default App;

