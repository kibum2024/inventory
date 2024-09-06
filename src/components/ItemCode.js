import React from 'react';
import InputDate from './InputDate';
import SearchInput from './SearchInput';
import './ItemCode.css';

const ItemCode = () => {
  const today = new Date();
  const director =  [ 
                      {code: '00001', name: '홍길동1'},
                      {code: '00002', name: '홍길동2'},
                      {code: '00003', name: '홍길동3'},
                      {code: '00004', name: '홍길동4'},
                      {code: '00005', name: '홍길동5'},
                      {code: '00006', name: '홍길동6'},
                      {code: '00007', name: '홍길동7'},
                      {code: '00008', name: '홍길동8'},
                      {code: '00009', name: '홍길동9'},
                      {code: '00010', name: '홍길동10'},
                      {code: '00011', name: '홍길동11'},
                      {code: '00012', name: '홍길동12'},
                      {code: '00013', name: '홍길동13'},
                      {code: '00014', name: '홍길동14'},
                      {code: '00015', name: '홍길동15'},
                      {code: '00016', name: '홍길동16'}
                    ];

  return (
    <div>
      <div className='title-wrap'>
        <div>주문서입력</div>
      </div>
      <div className='content-wrap'>
        <div className='search-condition'>
          <div className='line01'>
            <InputDate dateProp = {today} />
            <InputDate dateProp = {today} />
          </div>
          <div>
            <h1>aaa</h1>
            <InputDate dateProp = {today} />
          </div>
          <div>
            <h1>search</h1>
            <SearchInput itemName = {"담당자"} inputDatas = {director}></SearchInput>
          </div>
        </div>
        <div className='grid'>

        </div>
      </div>
      <div className='button-wrap'>

      </div>
    </div>
  );
}

export default ItemCode;