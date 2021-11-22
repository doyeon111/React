import React, { Fragment, useState, useMemo } from 'react';



const formatter = Intl.NumberFormat('ko-KR'); //3자리마다 ,가 나오는 설정

const data = [
    { name: '오늘의 커피', price: 2500 },
    { name: '에스프레소', price: 2800 },
    { name: '아메리카노', price: 3000 },
    { name: '카페라떼', price: 3500 },
    { name: '카페모카', price: 3800 }

];

//상태 state
function Order() {
    const [ selected, setSelected ] = useState( [] );
console.log('selected', selected);

    const sum = useMemo( () => {
        let value = 0;
        selected.forEach(item => value += item.price);
        return value;
    }, [selected]);

    return (
        <div className="container">
            <h1 className="font-bold">Order</h1>
            <h2 className="text-xl font-bold">메뉴판</h2>

            <dl>
            {
                    data.map( element => (
                        <Fragment key={element.name}>
                            <dt>{element.name}</dt>
                            <dd>
                                {formatter.format(element.price) }원
                                <small>
                                    <button onClick={ () => {
                                        if( selected.includes(element)) {
                                            setSelected(selected.filter (item => item !== element));
                                        }
                                        else {
                                            setSelected([...selected, element]);
                                        }

                                    }}>
                                        [ {selected.includes(element) ? '선택 해제' : '선택'}]
                                    </button>
                                </small>
                            </dd>
                        </Fragment>
                    )   )
            }
            </dl>
            <hr/>

            <h2 className="text-xl font-bold">주문서</h2>
            <ul className="list-unstyled">
                {selected.map(item => <li key={item.name}>{item.name} </li> )}
            </ul>

            합계: {formatter.format(sum)}원

            <div className="mt-4">
                <button className="btn btn-primary btn-lg">
                    주문하기
                </button>
            </div>
        </div>
    )
}

export default Order;