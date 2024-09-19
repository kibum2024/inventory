import React, { useState } from 'react';
import KbInputDate from './KbInputDate';
import KbSearchInput from './KbSearchInput';
import KbGrid from './KbGrid';
import KbGridTest from './KbGridTest';
import KbButton from './KbButton';
import KbSwitch from './KbSwitch';
import KbCombo from './KbCombo';
import KbComboInButton from './KbComboInButton';
import KbSearchButton from './KbSearchButton';
import KbSearchPopup from './KbSearchPopup';
import KbBoxRadioButton from './KbBoxRadioButton';
import KbRadioButton from './KbRadioButton';
import KbInput from './KbInput';
import KbCheckboxList from './KbCheckboxList';
import KbCheckboxListStep2 from './KbCheckboxListStep2';
import KbCheckboxListStep3 from './KbCheckboxListStep3';
import TransactionStatement from './TransactionStatement';
import Form4 from '../form/Form4';
import './ItemCode.css';
import { FaS } from 'react-icons/fa6';

const ItemCode = () => {
  const today = new Date();
  const director = [
    { code: '00001', name: '홍길동' },
    { code: '00002', name: '김영철' },
    { code: '00003', name: '안성준' },
    { code: '00004', name: '양무리' },
    { code: '00005', name: '공한택' },
    { code: '00006', name: '임소율' },
    { code: '00007', name: '김유화' },
    { code: '00008', name: '이상화' },
    { code: '00009', name: '김형준' },
    { code: '00010', name: '김다래' },
    { code: '00011', name: '김준석' },
    { code: '00012', name: '이대호' },
    { code: '00013', name: '김주석' },
    { code: '00014', name: '염동엽' },
    { code: '00015', name: '전준우' },
    { code: '00016', name: '윤동희' },
    { code: '00017', name: '우동성' },
    { code: '00018', name: '김호윤' }
  ];

  const [columnDefs] = useState([
    { headerName: 'No', numbering: true, width: 50, align: 'center' },
    { headerName: '선택', checkboxSelection: true, headerCheckboxSelection: true, width: 50, align: 'center' },
    { headerName: '작업자코드', field: 'workcode', width: 80, align: 'center', editable: true, chartype: 'string', search: true },
    { headerName: '작업자명', field: 'workname', searchButton: true, searchconnect: 'workcode', searchname: '작업자', searchParams: { values: director }, width: 150, align: 'left', chartype: 'string', search: true },
    { headerName: '제조사', field: 'make', sortable: true, width: 150, align: 'left', editable: true, chartype: 'string', search: true },
    { headerName: '제품', field: 'model', sortable: true, width: 250, align: 'left', chartype: 'string', search: true },
    { headerName: '가격', field: 'price', editable: true, width: 100, align: 'right', separator: true, chartype: 'number', search: true },
    { headerName: '제조일자', field: 'makedate', width: 100, align: 'center', chartype: 'date', search: true },
    // { headerName: '제조일자', field: 'makedate', editable: true, width: 100, align: 'center', chartype: 'date', search: true  },
    { headerName: '사용여부', field: 'use', switch: true, width: 100, align: 'center' },
    { headerName: '사용자', field: 'user', combo: true, comboParams: { values: director }, width: 100, align: 'center' },
  ]);

  const [rowData, setRowData] = useState([
    { workcode: '00001', workname: '홍길동', make: 'Toyota', model: 'Celica', price: 35000, use: 'true', makedate: '20240911', user: '00001', user2: '00001' },
    { workcode: '00002', workname: '김영철', make: 'Toyota', model: 'Celica', price: 35000, use: 'true', makedate: '20240912', user: '00002', user2: '00002' },
    { workcode: '00003', workname: '안성준', make: 'Toyota', model: 'Celica', price: 35000, use: 'true', makedate: '20240913', user: '00003', user2: '00003' },
    { workcode: '00004', workname: '양무리', make: 'Ford', model: 'Mondeo', price: 32000, use: 'true', makedate: '20240914', user: '00004', user2: '00004' },
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

  const customerKind = [
    { code: '01', name: '매입' },
    { code: '02', name: '매출' },
    { code: '03', name: '혼합' },
  ];

  const permissions = [
    // { id: 1, name: '모든 권한' },
    { id: 2, name: '거래수집' },
    { id: 3, name: '전표관리' },
    { id: 4, name: '금융관리' },
    { id: 5, name: '인사/급여' },
    { id: 6, name: '보고서' },
    { id: 7, name: '장부/결산' },
    { id: 8, name: '기초정보' },
    { id: 9, name: '증명서발급' },
  ];

  const menuItems = [
    { menuId: '1', menuCode1: '01', menuCode2: '00', menuCode3: '00', menuName: '거래수집', menuLevel: '1', menuUseYn: '1', menuIconYn: '1', menuIcon: 'IoFileTrayFullOutline', menuComponent: '' },
    { menuId: '2', menuCode1: '01', menuCode2: '01', menuCode3: '00', menuName: '매출거래', menuLevel: '2', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: '' },
    { menuId: '3', menuCode1: '01', menuCode2: '01', menuCode3: '01', menuName: '매출세금계산서', menuLevel: '3', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: 'UserManagement' },
    { menuId: '4', menuCode1: '01', menuCode2: '01', menuCode3: '02', menuName: '매출현금영수증', menuLevel: '3', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: 'UserManagement' },
    { menuId: '5', menuCode1: '01', menuCode2: '01', menuCode3: '03', menuName: '매출신용카드', menuLevel: '3', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: 'Form2' },
    { menuId: '6', menuCode1: '02', menuCode2: '00', menuCode3: '00', menuName: '전표관리', menuLevel: '1', menuUseYn: '1', menuIconYn: '1', menuIcon: 'IoReceiptOutline', menuComponent: '' },
    { menuId: '7', menuCode1: '03', menuCode2: '00', menuCode3: '00', menuName: '금융관리', menuLevel: '1', menuUseYn: '1', menuIconYn: '1', menuIcon: 'HiOutlineBuildingOffice2', menuComponent: '' },
    { menuId: '8', menuCode1: '04', menuCode2: '00', menuCode3: '00', menuName: '인사/급여관리', menuLevel: '1', menuUseYn: '1', menuIconYn: '1', menuIcon: 'IoPersonAddOutline', menuComponent: '' },
    { menuId: '9', menuCode1: '05', menuCode2: '00', menuCode3: '00', menuName: '보고서', menuLevel: '1', menuUseYn: '1', menuIconYn: '1', menuIcon: 'IoDocumentAttachOutline', menuComponent: '' },
    { menuId: '10', menuCode1: '06', menuCode2: '00', menuCode3: '00', menuName: '장부/결산', menuLevel: '1', menuUseYn: '1', menuIconYn: '1', menuIcon: 'IoNewspaperOutline', menuComponent: '' },
    { menuId: '11', menuCode1: '07', menuCode2: '00', menuCode3: '00', menuName: '기초정보', menuLevel: '1', menuUseYn: '1', menuIconYn: '1', menuIcon: 'HiOutlineCog8Tooth', menuComponent: '' },
    { menuId: '12', menuCode1: '07', menuCode2: '01', menuCode3: '00', menuName: '데이터관리', menuLevel: '2', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: '' },
    { menuId: '13', menuCode1: '07', menuCode2: '01', menuCode3: '01', menuName: '외부기관연동설정', menuLevel: '3', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: 'Form3' },
    { menuId: '14', menuCode1: '07', menuCode2: '02', menuCode3: '00', menuName: '정보관리', menuLevel: '2', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: '' },
    { menuId: '15', menuCode1: '07', menuCode2: '02', menuCode3: '01', menuName: '회사정보', menuLevel: '3', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: 'Form2' },
    { menuId: '16', menuCode1: '07', menuCode2: '02', menuCode3: '02', menuName: '거래처정보', menuLevel: '3', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: 'Form3' },
    { menuId: '17', menuCode1: '07', menuCode2: '02', menuCode3: '03', menuName: '품목정보', menuLevel: '3', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: 'Form2' },
    { menuId: '18', menuCode1: '07', menuCode2: '03', menuCode3: '00', menuName: '고정자산', menuLevel: '2', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: '' },
    { menuId: '19', menuCode1: '07', menuCode2: '03', menuCode3: '01', menuName: '고정자산정보', menuLevel: '3', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: 'Form3' },
    { menuId: '20', menuCode1: '07', menuCode2: '03', menuCode3: '02', menuName: '미상각자산감가상각명세서', menuLevel: '3', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: 'Form2' },
    { menuId: '21', menuCode1: '07', menuCode2: '03', menuCode3: '03', menuName: '양도자산감가상각명세서', menuLevel: '3', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: 'Form3' },
    { menuId: '22', menuCode1: '07', menuCode2: '04', menuCode3: '00', menuName: '계정과목', menuLevel: '2', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: '' },
    { menuId: '23', menuCode1: '07', menuCode2: '04', menuCode3: '01', menuName: '계정과목', menuLevel: '3', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: 'Form2' },
    { menuId: '24', menuCode1: '07', menuCode2: '05', menuCode3: '00', menuName: '사용자관리', menuLevel: '2', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: '' },
    { menuId: '25', menuCode1: '07', menuCode2: '05', menuCode3: '01', menuName: '사용자등록 및 권한관리', menuLevel: '3', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: 'Form3' },
    { menuId: '26', menuCode1: '07', menuCode2: '06', menuCode3: '00', menuName: '업무설정', menuLevel: '2', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: '' },
    { menuId: '27', menuCode1: '07', menuCode2: '06', menuCode3: '01', menuName: '회계업무설정', menuLevel: '3', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: 'Form2' },
    { menuId: '28', menuCode1: '07', menuCode2: '06', menuCode3: '02', menuName: '급여업무설정', menuLevel: '3', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: 'Form3' }
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

  const handleCategoryClick = (checkMenu) => {
    console.log(`${checkMenu} 버튼이 클릭되었습니다.`);
  };

  const [selectedPermissions, setSelectedPermissions] = useState([]);

  const handleCheckedItemsChange = (checkedItems) => {
    setSelectedPermissions(checkedItems);
    console.log('선택된 항목:', checkedItems);
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
            <KbButton textProp={"삭제"} iconProp={"삭제"} onClick={() => buttonClick('삭제')} />
            <KbButton typeProp="addButton" textProp={""} iconProp={"추가"} onClick={() => buttonClick('추가')} />
            <KbButton typeProp="updateButton" textProp={""} iconProp={"수정"} onClick={() => buttonClick('수정')} />
            <KbButton typeProp="searchButton" textProp={""} iconProp={"검색"} onClick={() => buttonClick('검색')} />
            <KbButton typeProp="searchButton" textProp={""} iconProp={"초기화"} onClick={() => buttonClick('초기화')} />
            <KbButton typeProp="searchButton" textProp={"다운로드"} iconProp={"엑셀"} onClick={() => buttonClick('엑셀')} />
            <KbButton typeProp="searchButton" textProp={"업로드"} iconProp={"엑셀"} onClick={() => buttonClick('엑셀')} />
          </div>
          <h1>input</h1>
          <div className='line01'>
            <KbInputDate dateProp={today} />
            <KbInputDate dateProp={today} />
          </div>
          <div>
            {/* <InputDate dateProp = {today} /> */}
          </div>
          <div>
            <h1>search</h1>
            {/* <KbSearchInput itemName = {"담당자"} inputDatas = {director}></KbSearchInput> */}
            <KbSearchInput itemProp={"창고"}
              titleWidthProp={50}
              codeWidthProp={80}
              nameWidthProp={100}
              heightProp={25}
              inputDatasProp={director} />
          </div>
        </div>
        <div>
          <h1>Switch 상태: {parentSwitchState ? 'ON' : 'OFF'}</h1>
          <div className='grid' style={{ marginLeft: '20px', padding: '0px 20px' }}>
            <KbSwitch swStatProp={false} onClick={switchClick} />
          </div>
        </div>
        <div>
          <h1>콤보 {parentComboState.code},{parentComboState.name} </h1>
          <div className='grid' style={{ marginLeft: '20px', padding: '0px 20px' }}>
            <KbCombo comboDataProp={director} userProp={"00004"} comboWidthProp={150} comboHeightProp={24} onClick={comboClick} />
          </div>
        </div>
        <div>
          <h1>콤보 버튼 안쪽으로 {parentComboState.code},{parentComboState.name} </h1>
          <div className='grid' style={{ marginLeft: '20px', padding: '0px 20px' }}>
            <KbComboInButton comboDataProp={director} userProp={"00004"} comboWidthProp={150} comboHeightProp={24} onClick={comboClick} />
          </div>
        </div>
        <div>
          <h1>검색버튼</h1>
          <div className='grid' style={{ marginLeft: '20px', padding: '0px 20px' }}>
            <KbSearchButton itemProp={"창고"} inputDatasProp={director} onClick={(newState) => searchClick(newState)} />
          </div>
        </div>
        <div>
          <h1>검색 팝업</h1>
          <div className='grid' style={{ marginLeft: '20px', padding: '0px 20px' }}>
            {/* <KbSearchPopup  itemProp = {"창고"} inputDatasProp = {director}/> */}
          </div>
        </div>
        <div>
          <h1>박스 라디오버튼</h1>
          <div className='grid' style={{ marginLeft: '20px', padding: '0px 20px' }}>
            <KbBoxRadioButton itemProp={"거래처 구분"} itemDatasProp={customerKind} allCheckProp={true} onClick={boxRadioClick} />
          </div>
        </div>
        <div>
          <h1>라디오버튼</h1>
          <div className='grid' style={{ marginLeft: '20px', padding: '0px 20px' }}>
            <KbRadioButton itemProp={"거래처 구분"} itemDatasProp={customerKind} onClick={boxRadioClick} />
          </div>
        </div>
        <div>
          <h1>멀티탭</h1>
          <div className='grid' style={{ marginLeft: '20px', padding: '0px 20px' }}>
            {/* <KbTabs /> */}
          </div>
        </div>
        <div>
          <h1>프린트 테스트</h1>
          <div className='grid' style={{ marginLeft: '20px', padding: '0px 20px' }}>
            <TransactionStatement />
          </div>
        </div>
        <div>
          <h1>체크박스 리스트 2단계</h1>
          <div className='grid' style={{ marginLeft: '20px', padding: '0px 20px' }}>
            <KbCheckboxListStep2  menuItems={menuItems} />
          </div>
        </div>
        <div>
          <h1>체크박스 리스트 3단계</h1>
          <div className='grid' style={{ marginLeft: '20px', padding: '0px 20px' }}>
            <KbCheckboxListStep3  menuItems={menuItems} onCheckedMenuIdsChange={handleCategoryClick} />
          </div>
        </div>
        <div>
          <h1>input</h1>
          <div className='grid' style={{ marginLeft: '20px', padding: '0px 20px' }}>
            <KbInput widthProp='100xp' />
          </div>
        </div>
        <div className='grid' style={{ marginLeft: '20px', padding: '0px 20px' }}>
          <h2>권한 선택</h2>
          <KbCheckboxList items={permissions} allCheckLabel="모든 권한" onCheckedItemsChange={handleCheckedItemsChange} />
          <div>
            <h3>선택된 권한:</h3>
            {selectedPermissions.map((id) => {
              const permission = permissions.find((item) => item.id === id);
              return <p key={id}>{permission ? permission.name : "모든 권한"}</p>;
            })}
          </div>
        </div>
        <h1>Grid1</h1>
        <div className='grid' style={{ marginLeft: '20px', padding: '0px 20px' }}>
          <KbGrid
            columnDefsProp={columnDefs} // 컬럼 정의
            rowDataProp={rowData} // 데이터
            rowSelectionProp={true} // 여러 행 선택 가능
            paginationProp={true} // 페이징 활성화
            paginationPageSizeProp={6} // 페이지당 10개 행 표시
            checkedCountProp={true}
            searchProp={false}
            excellProp={"3"} //"1: 엑셀다운, 2:엑셀다운/엑셀업, 3:엑셀다운/엑셀업/엑셀양식, 4:엑셀업/엑셀양식"
            curdProp={"5"} //"1:등록, 2:수정, 3:삭제, 4:등록/수정, 5:등록/수정/삭제, 6:등록/삭제, 7:수정/삭제
            insertComponentProp={Form4}
            updateComponentProp={Form4}
          />
        </div>
        <h1>Grid test</h1>
        <div className='grid' style={{ marginLeft: '20px', padding: '0px 20px' }}>
          <KbGridTest
            columnDefsProp={columnDefs} // 컬럼 정의
            rowDataProp={rowData} // 데이터
            rowSelectionProp={true} // 여러 행 선택 가능
            paginationProp={true} // 페이징 활성화
            paginationPageSizeProp={6} // 페이지당 10개 행 표시
            checkedCountProp={true}
            searchProp={false}
            excellProp={"3"} //"1: 엑셀다운, 2:엑셀다운/엑셀업, 3:엑셀다운/엑셀업/엑셀양식, 4:엑셀업/엑셀양식"
            curdProp={"5"} //"1:등록, 2:수정, 3:삭제, 4:등록/수정, 5:등록/수정/삭제, 6:등록/삭제, 7:수정/삭제
            insertComponentProp={Form4}
            updateComponentProp={Form4}
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