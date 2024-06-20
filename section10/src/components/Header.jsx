import './Header.css';
import { memo } from 'react'; // 불필요한 리렌더링을 방지하기 위함
const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 📅</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>);
};

// const memoizedHeader = memo(Header); //props를 받지 않았을 경우 리렌더링 방지

export default memo(Header); //Header가 아닌 최적화된 memoizedHeader를 내보냄.