import React, { Component } from "react";
import { Route } from 'react-router-dom';
import reactRouter1 from './R_reactRouter';
import reactRouter2 from "./R_reactRouter2"; 

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route exact path='/' component={reactRouter1} />
                <Route exact path='/reactRouter2' component={reactRouter2} />
            </div>
        );
    }
}

export default App;