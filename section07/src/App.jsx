import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import { useState, useEffect, useRef } from 'react';
import Even from './components/Even';

// useEffect!!
function App() {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  //아직 mount 되지 않았다.
  const isMount = useRef(false);

  //count가 바뀔 때 마다 
  //실시간으로 변경된 값이 필요할 경우....useEffect 사용
  // useEffect(() => {
  //   console.log(`count: ${count} / input: ${input}`);
  // }, [count, input]); // 해당 count값이 바뀔 때 마다 위의 console.log가 계속 실행이 되어서 변경된 count의 값을 계속 console에 출력
  //2개있을 경우 둘 중 하나만 값이 바껴도 재실행
  //위의 [count]는 의존성 배열
  //deps(dependency array)


  //1. 마운트: 탄생 (최초로 1번만 실행시키고 싶을 경우)
  useEffect(() => {
    console.log("mount");
  }, []);

  //2. 업데이트: 변화, 리렌더링
  useEffect(() => {
    if(!isMount.current) { //컴포넌트가 마운트 되지 않은 상황(초기에 불러올 때 mount, update 둘 다 불러오기 때문에 업데이트 될때만 실행되게 조건문추가)
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  //3. 언마운트: 죽음
  //Even.jsx 에서 짝수일 경우에는 unmount 실행



  //Controller에서 어떤 버튼을 선택했는지 상태값을 받음
  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} 
          onChange={(e) => {
          setInput(e.target.value);
          }} 
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null} 
      </section>

      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
