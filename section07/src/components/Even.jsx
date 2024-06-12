import { useEffect } from 'react';
const Even = () => {
  useEffect(() => {
    //useEffect에 callback 함수를 반환하는 함수를 클린업, 정리함수라고 부름
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>짝수입니다.</div>
}

export default Even;