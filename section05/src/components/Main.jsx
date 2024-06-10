import "./Main.css";
// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
//  자바스크립트 표현식: 삼항연산자, 값, ..특정한 값이 될 수 있는 것 (if문, 반복문 x)
// 2. 숫자, 문자열, 배열 값만 렌더링 된다.
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야만 한다. ex) main
// const Main = () => {
//     const number = 10;
//     const obj = {a: 1};
//     return (
//         <main>
//             <h1>main</h1>
//             <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
//             {10}
//             {number}
//             {[1, 2, 3]}
//             {true}  { /* 렌더링 불가능 */ }
//             {undefined} { /* 렌더링 불가능 */ }
//             {null} { /* 렌더링 불가능 */ }
//             {obj.a}
//         </main>
//     );
// };

const Main = () => {
    const user =  {
        name: "김도연",
        isLogin: true
    };
    // return (
    //     <>
    //         {user.isLogin ? (
    //             <div>로그아웃</div>
    //         ) : (
    //             <div>로그인</div>
    //         )} {/* isLogin이 true일 경우 로그아웃, false일 경우 로그인 버튼을 보여준다. */}
    //     </>
    // );
    if(user.isLogin) {
        return (
            <div className="logout"> {/* import 해온 Main.css 적용 */}
                로그아웃
            </div>
        );
    } else {
        return <div>로그인</div>;
    }
};

export default Main;