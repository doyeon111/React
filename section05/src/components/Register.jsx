import { useState, useRef } from 'react';
//state로 사용자 입력 관리하기
//간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
const Register = () => {
  // const [name, setName] = useState("이름");
  // const [birth, setBirth] = useState("");
  // const [country, setCountry] = useState("");
  // const [bio, setBio] = useState("");

  //위의 함수들을 한꺼번에 선언(객체로 선언)
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: ""
  });

  // ref를 이용한 방법
  const countRef = useRef(0); //current에 값을 저장
  const inputRef = useRef();
  
  //아래 함수들을 한꺼번에 선언해주기

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = () => {
    if(input.name === "") {
      //이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus();
    }
  };

  // const onChangeName = (e) => {
  //   // setName(e.target.value);
  //   setInput({
  //     ...input, // name 외에 birth, country, bio의 값들을 변경시키지 않고 유지시키도록 설정
  //     name: e.target.value
  //   })
  // }
  
  // const onChangeBirth = (e) => {
  //   setInput({
  //     ...input, // name 외에 birth, country, bio의 값들을 변경시키지 않고 유지시키도록 설정
  //     birth: e.target.value
  //   })
  // }

  // const onChangeCountry = (e) => {
  //   setInput({
  //     ...input, // name 외에 birth, country, bio의 값들을 변경시키지 않고 유지시키도록 설정
  //     country: e.target.value
  //   })
  // }
  
  // const onChangeBio = (e) => {
  //   setInput({
  //     ...input, // name 외에 birth, country, bio의 값들을 변경시키지 않고 유지시키도록 설정
  //     bio: e.target.value
  //   })
  // }

  return (
    <div>
      <div>
        <input ref={inputRef} name="name" value={input.name} onChange={onChange} placeholder={"이름"} />
      </div>

      <div>
        <input name="birth" value={input.birth} onChange={onChange} type="date" />
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
}

export default Register;