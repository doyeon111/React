import { useSearchParams } from 'react-router-dom'; //Query String 사용시
import { useState, useContext } from 'react';
import { DiaryStateContext } from '../App';

import Header from '../components/Header';
import Button from '../components/Button';
import DiaryList from '../components/DiaryList';

const getMonthlyData = (pivotDate, data) => {

  const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime(); //1일, 0시, 0분, 0초
  const endTime =  new Date(pivotDate.getFullYear(), pivotDate.getMonth() +1, 0, 23, 59, 59).getTime();

  return data.filter((item) => 
    beginTime <= item.createdDate && item.createdDate <= endTime
  );
}

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  const monthlyData = getMonthlyData(pivotDate, data);

  const onIncreaseMonth = () => { // 날짜를 한 달 뒤로 보냄
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1))
  };
  const onDecreaseMonth = () => { // 날짜를 한 달 전으로 보냄
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()-1))
  };

  return (
    <div>
      <Header 
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`} 
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
}

export default Home;