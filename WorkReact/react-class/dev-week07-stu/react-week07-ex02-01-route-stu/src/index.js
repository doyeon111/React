// ./src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Home(){
    return (
        <div>
            <h2>Home</h2>
            Home...
        </div>
    )
}

function Topics(){
    return (
        <div>
            <h2>Topics</h2>
            Topics...
        </div>
    );
}

function Contact(){
    return (
        <div>
            <h2>Contact</h2>
            Contact...
        </div>
    )
}

function App(){
    return (
        <div>
            <h1>React Router DOM</h1>
            <ul>
                <Home></Home>
                <Topics></Topics>
                <Contact></Contact>
            </ul>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));