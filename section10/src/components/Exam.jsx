import { useReducer } from 'react';
 
// reducer: 변환기
// => 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action) { // 2. reducer 함수가 호출이 되고 3. 액션객체로 dispatch의 값들이 전달됨
  console.log(state, action);
  // if(action.type === 'INCREASE') {
  //   return state + action.data;
  // } else if(action.type === 'DECREASE') {
  //   return state - action.data;
  // }

  switch(action.type) {
    case 'INCREASE' : return state + action.data;
    case 'DECREASE' : return state - action.data;
    default: return state;
  }
}
const Exam = () => {
  // dispatch : 발송하다, 급송하다
  // => 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    //인수 : 상태가 어떻게 변화되길 원하는지
    // -> 액션 객체
    dispatch({ // 1. 이렇게 디스패치를 호출하게 되면 
      type: "INCREASE", // 증가시키다
      data: 1, //1만큼 증가시켜라
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1
    })
  }

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  )
};

export default Exam;