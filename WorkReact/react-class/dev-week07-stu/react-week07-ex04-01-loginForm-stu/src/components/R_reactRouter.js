import React, { Component } from "react";
import { Link } from 'react-router-dom';

class R_reactRouter extends Component {
    render() {
        return (
            <>
                <h1>path='/'</h1>
                <h3>R_reactRouter1</h3>
                <Link to = {'/reactRouter2'}>reactRouter2</Link>
            </>
        )
    }
}

export default R_reactRouter;