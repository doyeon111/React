import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'; // "/" 등등으로 불러오기 위함
import { useReducer, useRef, createContext } from 'react';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/Notfound';
import Edit from './pages/Edit';
import { getEmotionImage } from './util/get-emotion-image';

import Button from './components/Button';
import Header from './components/Header';

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지

const mockData = [
  {
    id: 1,
    createdDate: new Date("2024-06-27").getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date("2024-06-26").getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
  {
    id: 3,
    createdDate: new Date("2024-05-11").getTime(),
    emotionId: 3,
    content: "3번 일기 내용",
  },
]

function reducer(state, action) {
  switch(action.type) {
    case 'CREATE' : 
      return [action.data, ...state];
    case 'UPDATE' :
      return state.map((item) => 
        String(item.id) === String(action.data.id) ? action.data : item);
    case 'DELELT' :
      return state.filter((item) => String(item.id) !== String(action.id));
    default :
      return state;
  }
} 

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3); //id 초기값 설정

  // const nav = useNavigate(); // 특정조건에 따라 페이지를 이동시켜야 할 때 사용

  // const onClickButton = () => {
  //   nav('/new');
  // };

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, context) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        context,
      }
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, context) => {
    dispatch({
      type: "UPDATE",
      data: {
        id, createdDate, emotionId, context
      }
    })
  }

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "UPDATE",
      data: {
        type: "DELETE",
        id, 
      }
    })
  }


  return (
    //Routes 컴포넌트 안에는 Route 컴포넌트만 작성할 수 있음
    //공통된 페이지가 아니라면 routes 컴포넌트 안에 작성해야함.
    //Link : 클릭 시 페이지 이동, 전체가 변경되는 게 아니라 필요한 컴포넌트만 전환됨
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{
          onCreate, onUpdate, onDelete
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App;
