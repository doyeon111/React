// recipe-app/src/App.js
import React from 'react';
import './App.css';
import Menu from './Components/Menu';
import Recipe from './Components/Recipe';
import data from './data/recipes.json';



function App() {
  return (
    <div className="App">
      <Menu recipes={data} title="YJ반 김도연" />
    </div>
  );
}

export default App;




