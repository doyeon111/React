import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import { useState } from 'react';

function App() {
  // 실제로 같은 컴포넌트끼리 값을 주고받을 수 없다.
  // 부모 -> 자식에게만 props로 값을 전달할 수 있음. 
  // 따라서 가장 부모인 App에서 count, setCount(이벤트핸들링)로 값을 전달
  // Viewer -> count 전달
  // Controller -> setCount 전달

  const [count, setCount] = useState(0);

  //Controller에서 어떤 버튼을 선택했는지 상태값을 받음
  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>

      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
