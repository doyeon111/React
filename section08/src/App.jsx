import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import { useState, useRef } from 'react';

const mockData = [
    {
      id: 0,
      isDone: false, //체크박스가 선택됐는지 안됐는지 판별
      content: "React 공부하기",
      date: new Date().getTime()
    },
    {
      id: 1,
      isDone: false, //체크박스가 선택됐는지 안됐는지 판별
      content: "빨래하기",
      date: new Date().getTime()
    },
    {
      id: 2,
      isDone: false, //체크박스가 선택됐는지 안됐는지 판별
      content: "노래 연습하기",
      date: new Date().getTime()
    }
  ]
  
  function App() { 
  const [todos, setTodos] = useState(mockData); // 생성된 todoList들을 보관
  const idRef = useRef(3);

  const onCreate = (content) => { //추가 기능 구현
    const newTodo = { // 새로운 객체 생성
      id: idRef.current++, //id값을 증가시킴
      isDone: false,
      content: content,
      date: new Date().getTime()
    }

    //push로 바로 넣을 수 없음, state값을 업데이트 해줘야함.
    setTodos([newTodo, ...todos]); //...todos는 기존 값에 newTodo를 추가함
    
  };

  const onUpdate = (targetId) => {
    // todos State의 값들 중에
    // targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경

    //인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    setTodos(todos.map((todo) => todo.id === targetId ? {...todo, isDone: !todo.isDone} : todo));
  };

  const onDelete = (targetId) => {
    //인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
