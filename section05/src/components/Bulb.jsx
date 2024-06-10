import {useState} from 'react';
// state 을 위한 함수 생성
// 리액트 컴포넌트들은 자신이 갖는 state가 변경되지 않아도 부모로부터 받는 props의 값이
// 변경되면 다시 리렌더링 된다.
const Bulb = () => {
  const [light, setLight] = useState("OFF");
  console.log(light);
  return (
    <div>
      {light === 'ON' ? (
        <h1 style={{backgroundColor: "orange"}}>ON</h1>
      ) : ( 
        <h1 style={{backgroundColor: "gray"}}>OFF</h1>
      )}
    <button onClick={() => {
      setLight(light === 'ON' ? 'OFF' : 'ON');
    }}>
      {light === "ON" ? "끄기" : "켜기"}
    </button>
    </div>
  );
};

export default Bulb;