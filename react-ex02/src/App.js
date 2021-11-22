import React, { Fragment } from 'react';
import './App.css';

function App() {
  const name = "리액트";
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16
  }
  return (
    <> {/* 여기는 안 보여요*/}
      <div 
        style={style} //여기도 안보염
      >
        {name}
      </div>
      <input />
    </>
  );
}

export default App;
