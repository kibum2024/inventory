import React, { useState } from 'react';
import KbInputDate from './KbInputDate';
import KbSearchInput from './KbSearchInput';
import KbGrid from './KbGrid';
import Kbbutton from './KbButton';
import KbSwitch from './KbSwitch';
import KbCombo from './KbCombo';
import KbSearchButton from './KbSearchButton';
import KbSearchPopup from './KbSearchPopup';
import KbBoxRadioButton from './KbBoxRadioButton';
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
                      {code: '00008', name: '이상화'},
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
    { headerName: 'No', numbering: true, width: 50, align: 'center'},
    { headerName: '선택', checkboxSelection: true, headerCheckboxSelection: true, width: 50, align: 'center'},
    { headerName: '작업자코드', field: 'workcode',  width: 80, align: 'center',  editable: true, chartype: 'string', search: true},
    { headerName: '작업자명', field: 'workname', searchButton:true, searchconnect:'workcode', searchname:'작업자', searchParams: { values: director}, width: 150, align: 'left',  chartype: 'string', search: true},
    { headerName: '제조사', field: 'make', sortable: true, width: 150, align: 'left',  editable: true, chartype: 'string', search: true},
    { headerName: '제품', field: 'model', sortable: true, width: 250, align: 'left', chartype: 'string', search: true  },
    { headerName: '가격', field: 'price', editable: true, width: 100, align: 'right', separator: true, chartype: 'number', search: true  },
    { headerName: '제조일자', field: 'makedate', width: 100, align: 'center', chartype: 'date', search: true  },
    // { headerName: '제조일자', field: 'makedate', editable: true, width: 100, align: 'center', chartype: 'date', search: true  },
    { headerName: '사용여부', field: 'use', switch: true, width: 100, align: 'center'  },
    { headerName: '사용자', field: 'user', combo: true,  comboParams: { values: director }, width: 100, align: 'center'  },
  ]);

  const [rowData, setRowData] = useState([
    { workcode: '00001', workname: '홍길동', make: 'Toyota',  model: 'Celica',  price: 35000, use: 'true', makedate: '20240911', user: '00001', user2: '00001' },
    { workcode: '00002', workname: '김영철', make: 'Toyota',  model: 'Celica',  price: 35000, use: 'true', makedate: '20240912', user: '00002', user2: '00002' },
    { workcode: '00003', workname: '안성준', make: 'Toyota',  model: 'Celica',  price: 35000, use: 'true', makedate: '20240913', user: '00003', user2: '00003' },
    { workcode: '00004', workname: '양무리', make: 'Ford',    model: 'Mondeo',  price: 32000, use: 'true', makedate: '20240914', user: '00004', user2: '00004' },
    { workcode: '00005', workname: '공한택', make: 'Porsche', model: 'Boxster', price: 72000, use: 'true', makedate: '20240915', user: '00005', user2: '00005' },
    { workcode: '00006', workname: '임소율', make: 'Porsche', model: 'Boxster', price: 72000, use: 'true', makedate: '20240916', user: '00006', user2: '00006' },
    { workcode: '00007', workname: '김유화', make: 'Porsche', model: 'Boxster', price: 72000, use: 'true', makedate: '20240917', user: '00007', user2: '00007' },
    { workcode: '00008', workname: '이상화', make: 'Porsche', model: 'Boxster', price: 72000, use: 'true', makedate: '20240918', user: '00008', user2: '00008' },
    { workcode: '00009', workname: '김형준', make: 'Porsche', model: 'Boxster', price: 72000, use: 'true', makedate: '20240919', user: '00009', user2: '00009' },
    { workcode: '00010', workname: '김다래', make: 'Porsche', model: 'Boxster', price: 72000, use: 'true', makedate: '20240910', user: '00010', user2: '00010' },
    { workcode: '00011', workname: '김준석', make: 'Porsche', model: 'Boxster', price: 72000, use: 'true', makedate: '20240911', user: '00011', user2: '00011' },
    { workcode: '00012', workname: '이대호', make: 'Porsche', model: 'Boxster', price: 72000, use: 'true', makedate: '20240912', user: '00012', user2: '00012' },
    { workcode: '00013', workname: '김주석', make: 'Porsche', model: 'Boxster', price: 72000, use: 'true', makedate: '20240913', user: '00013', user2: '00013' },
    { workcode: '00014', workname: '염동엽', make: 'Porsche', model: 'Boxster', price: 72000, use: 'true', makedate: '20240914', user: '00014', user2: '00014' },
    { workcode: '00015', workname: '전준우', make: 'Porsche', model: 'Boxster', price: 72000, use: 'true', makedate: '20240915', user: '00015', user2: '00015' }
  ]);

  const customerKind =  [ 
    {code: '01', name: '매입'},
    {code: '02', name: '매출'},
    {code: '03', name: '혼합'},
  ];

  const [parentSwitchState, setParentSwitchState] = useState(false);
  const [parentComboState, setParentComboState] = useState("");
  const [parentSearchState, setParentSearchState] = useState("");

  const switchClick = (newState) => {
    setParentSwitchState(newState); // 부모 컴포넌트의 상태 업데이트
  };

  const searchClick = (newState) => {
    setParentSearchState(newState); // 부모 컴포넌트의 상태 업데이트
  };

  const comboClick = (newState) => {
    // console.log("newState : ", newState);
    setParentComboState(newState); // 부모 컴포넌트의 상태 업데이트
    
  };

  const buttonClick = (buttonType) => {
    console.log(`${buttonType} 버튼이 클릭되었습니다.`);
  };

  const boxRadioClick = (radioType) => {
    console.log(`${radioType} 버튼이 클릭되었습니다.`);
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
            {/* <KbSearchInput itemName = {"담당자"} inputDatas = {director}></KbSearchInput> */}
            <KbSearchInput  itemProp = {"창고"} 
                            titleWidthProp = {50} 
                            codeWidthProp = {80} 
                            nameWidthProp = {100} 
                            heightProp = {25} 
                            inputDatasProp = {director} />
          </div>
        </div>
        <div>
          <h1>Switch 상태: {parentSwitchState ? 'ON' : 'OFF'}</h1>
          <div className='grid' style={{marginLeft: '20px', padding: '0px 20px'}}>
            <KbSwitch swStatProp = {false} onClick={switchClick}/>
          </div>  
        </div>
        <div>
          <h1>콤보 {parentComboState.code},{parentComboState.name} </h1>
          <div className='grid' style={{marginLeft: '20px', padding: '0px 20px'}}>
            <KbCombo comboDataProp = {director} userProp = {"00004"} comboWidthProp = {150} comboHeightProp = {24} onClick={comboClick}/>
          </div>  
        </div>
        <div>
          <h1>검색버튼</h1>
          <div className='grid' style={{marginLeft: '20px', padding: '0px 20px'}}>
            <KbSearchButton itemProp = {"창고"} inputDatasProp = {director} onClick={(newState) => searchClick(newState)}/>
            </div>  
        </div>
        <div>
          <h1>검색 팝업</h1>
          <div className='grid' style={{marginLeft: '20px', padding: '0px 20px'}}>
            {/* <KbSearchPopup  itemProp = {"창고"} inputDatasProp = {director}/> */}
          </div>  
        </div>
        <div>
          <h1>박스 라디오버튼</h1>
          <div className='grid' style={{marginLeft: '20px', padding: '0px 20px'}}>
            <KbBoxRadioButton  itemProp = {"거래처 구분"} itemDatasProp = {customerKind} allCheckProp = {true} onClick={boxRadioClick} />
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
        <div className='delete-button'>
          <div>한글</div>
          <div>영어</div>
        </div>

        {/* <h1>Grid2</h1>
        <div className='grid'>
          <Grid />
        </div> */}
      </div>
    </div>
  );
}

export default ItemCode;