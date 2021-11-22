import React, { useState } from 'react';
import './App.css';

function App() {
  let posts = '프로그래밍';
  const [title, setTitle] = useState('React 구독'); //초기값을 React로 지정
  const [likeBtn, setLikeBtn] = useState(0); //초기값을 0으로 지정

  function changeTitle() {
    var newTitle = [...title]; //원본이 손상되지 않도록 복사본을 사용
    newTitle = 'React 구독중';
    setTitle(newTitle);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>Dev's Blog</div>
      </div>
      <button onClick={changeTitle}>구독 버튼</button>
      <h4>{posts}</h4>
      <h4>{title}
        <span onClick={ () => {setLikeBtn(likeBtn + 1)}}>
        👍</span> {likeBtn} </h4>
    </div>
  );
}

export default App;
