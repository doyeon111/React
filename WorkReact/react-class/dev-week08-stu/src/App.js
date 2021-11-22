// recipe-app/src/App.js
import React from 'react';
import './App.css';
import Menu from './Components/Menu';
import Instruction from './Components/Instructions';
import Recipe from './Components/Recipe';
import data from './data/recipes.json';



function App() {
  return (
    <div className="App">
      <Menu recipes={data} title="맛있는 조리법" />
    </div>
  );
}

export default App;
