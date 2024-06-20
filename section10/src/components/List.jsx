import './List.css';
import TodoItem from './TodoItem';
import { useState, useMemo } from 'react';
//map은 for문 같은 것
const List = ({todos, onUpdate, onDelete}) => {

  const [search, setSearch] = useState(""); //검색어 조건에 맞게 리렌더링 하기 위해서 state에 저장  

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if(search === "") {
      return todos;
    } 
    //todo에 있는 모든 배열을 순회하면서 todo.content.includes(search)의 값이 참이 되는 것만 필터링
    return todos.filter((todo) => 
      //toLowerCase는 검색할 때 대소문자 구별하지 않기 위해 모두 소문자로 변환하여 검색
      todo.content.toLowerCase().includes(search.toLowerCase())
    ); 
  };

  const filteredTodos = getFilteredData(); //필터링된 todos의 값

  const {totalCount, doneCount, notDoneCount} = useMemo(() => { 
    console.log("getAnalysedData 호출!");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length; //전체 todo중에 완료된 todo 저장
    const notDoneCount = totalCount - doneCount; // 완료되지 않은 todo의 개수
    
    return {
      totalCount,
      doneCount,
      notDoneCount
    };
  }, [todos]);
  // [] 부분: 의존성배열: deps

  // const {totalCount, doneCount, notDontCount} = getAnalyzedData();

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>
        <div>total : {totalCount}</div>
        <div>done : {doneCount}</div>
        <div>notDone : {notDoneCount}</div>
      </div>
      <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />
        })}
      </div>
    </div>
  );
};

export default List;