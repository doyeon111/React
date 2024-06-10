const Button = ({ text, color, children }) => {
  //이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };
  return (
    <button 
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()} {/* 기본값이 없을 때 오류발생 */}
      {children}
    </button>
  );
};

Button.defaultProps = { /* 위에서 오류가 발생하는 것을 막기 위해  */
  color: "black"
};

export default Button;