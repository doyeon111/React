import './App.css';
import Register from './components/Register';
import HookExam from './components/HookExam';

// const Header = () => { /* App의 자식 컴포넌트 */
//   /* 해당 방식으로도 선언 가능 (요 방식 많이 사용), 첫 글자 대문자로! */
//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   );
// }

// function App() { /* 부모 컴포넌트 */ 
//   const buttonProps = {
//     text: "메일",
//     color: "red",
//     a: 1,
//     b: 2, 
//     c: 3
//   };
//   return (
//     <> 
//       {/* <Header />
//       <Main />
//       <Footer /> */}
//       {/* html태그를 반환하는 함수 ==> 컴포넌트 (보통 함수이름을 따서 부름 ex) App 컴포넌트 */}
//       <Button {...buttonProps} /> {/* 여러 개일 경우 묶어서 보냄 */}
//       <Button text={"카페"} />
//       <Button text={"블로그"}>
//         <div>자식요소</div> {/* 자식요소들은 자동으로 children 값으로 전달됨 */}
//         <Header />
//       </Button>
//     </>
//   );
// }

// State 알아보기
function App() {
  // const state = useState(0); //첫번째 요소: state의 초기값, 두번째요소: state를 변경시키는 상태변화함수

  return (
    <>
      <HookExam />
    </>
  )
}

export default App;
