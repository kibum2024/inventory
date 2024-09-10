import React, { useState } from 'react';
import KbInputDate from './KbInputDate';
import SearchInput from './SearchInput';
import KbGrid from './KbGrid';
import Kbbutton from './KbButton';
import Grid from './Grid';
import KbSwitch from './KbSwitch';
import KbCombo from './KbCombo';
import './ItemCode.css';

const ItemCode = () => {
  const today = new Date();
  const director =  [ 
                      {code: '00001', name: '홍길동'},
                      {code: '00002', name: '김영철'},
                      {code: '00003', name: '안성준'},
                      {code: '00004', name: '양무리'},
                      {code: '00005', name: '공한택'},
                      {code: '00006', name: '임소율'},
                      {code: '00007', name: '김유화'},
                      {code: '00008', name: '이상목'},
                      {code: '00009', name: '김형준'},
                      {code: '00010', name: '김다래'},
                      {code: '00011', name: '김준석'},
                      {code: '00012', name: '이대호'},
                      {code: '00013', name: '김주석'},
                      {code: '00014', name: '염동엽'},
                      {code: '00015', name: '전준우'},
                      {code: '00016', name: '윤동희'},
                      {code: '00017', name: '우동성'},
                      {code: '00018', name: '김호윤'}
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
    { headerName: '가격', field: 'price', editable: true, width: 100, align: 'right', separator: true, chartype: 'number', search: true  },
    { headerName: '사용여부', field: 'use', switch: true, width: 100, align: 'center'  },
    { headerName: '사용여부1', field: 'use', switch: true, width: 100, align: 'center'  }
  ]);

  const [rowData, setRowData] = useState([
    { make: 'Toyota',  model: 'Celica',  price: 35000, use: 'true' },
    { make: 'Ford',    model: 'Mondeo',  price: 32000, use: 'true' },
    { make: 'Porsche', model: 'Boxster', price: 72000, use: 'true' },
    { make: 'Porsche', model: 'Boxster', price: 72000, use: 'true' },
    { make: 'Porsche', model: 'Boxster', price: 72000, use: 'true' },
    { make: 'Porsche', model: 'Boxster', price: 72000, use: 'true' },
    { make: 'Porsche', model: 'Boxster', price: 72000, use: 'true' },
    { make: 'Porsche', model: 'Boxster', price: 72000, use: 'true' },
    { make: 'Porsche', model: 'Boxster', price: 72000, use: 'true' },
    { make: 'Porsche', model: 'Boxster', price: 72000, use: 'true' },
    { make: 'Porsche', model: 'Boxster', price: 72000, use: 'true' },
    { make: 'Porsche', model: 'Boxster', price: 72000, use: 'true' },
    { make: 'Porsche', model: 'Boxster', price: 72000, use: 'true' }
  ]);

  const [parentSwitchState, setParentSwitchState] = useState(false);
  const [parentComboState, setParentComboState] = useState(false);

  const switchClick = (newState) => {
    setParentSwitchState(newState); // 부모 컴포넌트의 상태 업데이트
  };

  const comboClick = (newState) => {
    setParentComboState(newState); // 부모 컴포넌트의 상태 업데이트
  };

  const buttonClick = (buttonType) => {
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
            <Kbbutton type="deleteButton"  onClick={() => buttonClick('삭제')}/>
            <Kbbutton type="addButton"  onClick={() => buttonClick('추가')}/>
            <Kbbutton type="updateButton"  onClick={() => buttonClick('수정')}/>
            <Kbbutton type="searchButton" onClick={() => buttonClick('검색')} />
          </div>
            <h1>input</h1>
          <div className='line01'>
            <KbInputDate dateProp = {today} />
            <KbInputDate dateProp = {today} />
          </div>
          <div>
            {/* <InputDate dateProp = {today} /> */}
          </div>
          <div>
            <h1>search</h1>
            {/* <SearchInput itemName = {"담당자"} inputDatas = {director}></SearchInput>
            <SearchInput itemName = {"창고"} inputDatas = {director}></SearchInput> */}
          </div>
        </div>
        <div>
          <h1>Switch 상태: {parentSwitchState ? 'ON' : 'OFF'}</h1>
          <div className='grid' style={{marginLeft: '20px', padding: '0px 20px'}}>
            <KbSwitch swStatProp = {false} onClick={switchClick}/>
          </div>  
        </div>
        <div>
          <h1>콤보</h1>
          <div className='grid' style={{marginLeft: '20px', padding: '0px 20px'}}>
            <KbCombo comboDataProp = {director} comboWidthProp = {150} comboHeightProp = {24} onClick={comboClick}/>
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