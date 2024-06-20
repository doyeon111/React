import './Editor.css';
import { useState, useRef } from 'react';
const Editor = ({ onCreate }) => {

  const [content, setContent] = useState(""); //content를 저장할 state
  const contentRef = useRef(); //새로운 객체 생성

  const onChangeContent = (e) => {
    setContent(e.target.value);
  }

  const onKeydown = (e) => { // 엔터버튼 클릭 시 실행
    if(e.keyCode === 13) {
      onSubmit();
    }
  }

  const onSubmit = () => {
    if(content === "") { //새로운 todo 입력란이 빈칸일 때 추가버튼 누르면 focus가게 설정
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent(""); //새로운 데이터 추가 후에 input 초기화
  }

  return (
    <div className="Editor">
      <input ref={contentRef} onKeyDown={onKeydown} value={content} onChange={onChangeContent} placeholder="새로운 Todo..." />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;