import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import { useState, useRef, useReducer } from 'react';

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

  function reducer(state, action) {
    switch(action.type) {
      case 'CREATE' : 
        return [action.data, ...state];
      case 'UPDATE' :
        return state.map((item) => item.id === action.targetId 
          ? {...item, isDone: !item.isDone} 
          : item
        )
    }
  }
  
  function App() { 
  // const [todos, setTodos] = useState(mockData); // 생성된 todoList들을 보관
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (content) => { //추가 기능 구현
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        content: content,
        date: new Date().getTime(),
      }
    });
  };

  const onUpdate = (targetId) => {
    // // todos State의 값들 중에
    // // targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경

    // //인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    // setTodos(todos.map((todo) => todo.id === targetId ? {...todo, isDone: !todo.isDone} : todo));
    dispatch({
      type: "UPDATE",
      targetId: targetId
    });
  };

  const onDelete = (targetId) => {
    //인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    // setTodos(todos.filter((todo) => todo.id !== targetId));

    dispatch({
      type: "DELETE",
      targetId: targetId
    });
  };

  return (
    <div className="App">
      {/* <Exam /> */}
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
