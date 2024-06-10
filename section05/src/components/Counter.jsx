import {useState} from 'react';
const Counter = () => {
  const [count, setCount] = useState(0); //setState에 변경하고자 하는 값 넣어줌
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => {
        setCount(count + 1);
      }}>+</button>
    </div>
  );
};

export default Counter;