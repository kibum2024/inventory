import React, { useState } from 'react';
import InputDate from './InputDate';
import SearchInput from './SearchInput';
import KbGrid from './KbGrid';
import Kbbutton from './KbButton';
import Grid from './Grid';
import TbGrid from './TbGrid';
import Test from './Test';
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
                      {code: '00016', name: '홍길동16'},
                      {code: '00017', name: '홍길동17'},
                      {code: '00018', name: '홍길동18'}
                    ];

  const [columnDefs] = useState([
    // { headerName: 'No', numbering: true, align: 'center'},
    // { headerName: '선택', checkboxSelection: true, headerCheckboxSelection: true,  align: 'center'},
    // { headerName: '제조사', field: 'make', sortable: true,  align: 'left',  editable: true, chartype: 'string', search: true},
    // { headerName: '제품', field: 'model', sortable: true, align: 'left', chartype: 'string', search: true  },
    // { headerName: '가격', field: 'price', editable: true, align: 'right', separator: true, chartype: 'number', search: true  }
    { headerName: 'No', numbering: true, width: 50, align: 'center'},
    { headerName: '선택', checkboxSelection: true, headerCheckboxSelection: true, width: 50, align: 'center'},
    { headerName: '제조사', field: 'make', sortable: true, width: 150, align: 'left',  editable: true, chartype: 'string', search: true},
    { headerName: '제품', field: 'model', sortable: true, width: 250, align: 'left', chartype: 'string', search: true  },
    { headerName: '가격', field: 'price', editable: true, width: 100, align: 'right', separator: true, chartype: 'number', search: true  }
  ]);

  const [rowData, setRowData] = useState([
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 }
  ]);

  const handleClick = (buttonType) => {
    console.log(`${buttonType} 버튼이 클릭되었습니다.`);
  };

  return (
    <div>
      <div className='title-wrap'>
        <div>주문서입력</div>
      </div>
      <div className='content-wrap'>
        <div className='search-condition'>
          <div>
            <h1>버튼</h1>
            <Kbbutton type="deleteButton"  onClick={() => handleClick('삭제')}/>
            <Kbbutton type="addButton"  onClick={() => handleClick('추가')}/>
            <Kbbutton type="updateButton"  onClick={() => handleClick('수정')}/>
            <Kbbutton type="searchButton" onClick={() => handleClick('검색')} />
          </div>
            <h1>input</h1>
          <div className='line01'>
            <InputDate dateProp = {today} />
            <InputDate dateProp = {today} />
          </div>
          <div>
            {/* <InputDate dateProp = {today} /> */}
          </div>
          <div>
            <h1>search</h1>
            <Test></Test>
            {/* <SearchInput itemName = {"담당자"} inputDatas = {director}></SearchInput>
            <SearchInput itemName = {"창고"} inputDatas = {director}></SearchInput> */}
          </div>
        </div>
        <h1>Grid1</h1>
        <div className='grid' style={{marginLeft: '20px', padding: '0px 20px'}}>
          <KbGrid
            columnDefsProp = {columnDefs} // 컬럼 정의
            rowDataProp = {rowData} // 데이터
            rowSelectionProp = {false} // 여러 행 선택 가능
            paginationProp = {true} // 페이징 활성화
            paginationPageSizeProp = {6} // 페이지당 10개 행 표시
          />
        </div>

        <h1>Grid2</h1>
        <div className='grid'>
          <Grid />
        </div>
      </div>
      <div className='button-wrap'>

      </div>
    </div>
  );
}

export default ItemCode;