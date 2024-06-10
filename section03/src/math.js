// math 모듈
export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

// module.exports = {
//     add, //키 값이 똑같을 경우 하나만 적어도 됨 같지 않을경우 add: aaa
//     sub
// }

// export { add, sub };

export default function multiply(a, b) { //default로 내보냄. 해당 함수가 대표(기본 값)
    return a * b ;
}

/* npm이란?
- Node Packaged Manager의 약자
- Node.js로 만들어진 모듈을 웹에서 받아서 설치하고 관리해주는 프로그램 */