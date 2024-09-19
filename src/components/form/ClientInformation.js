import React, { useState } from 'react';
import KbComboInButton from '../kbcomponents/KbComboInButton';
import Kbbutton from '../kbcomponents/KbButton';
import KbBoxRadioButton from '../kbcomponents/KbBoxRadioButton';
import KbGrid from '../kbcomponents/KbGrid';
import Form4 from '../form/Form4';
import './ClientInformation.css';

const ClientInformation = () => {
  const director = [
    { code: '00', name: '전체' },
    { code: '01', name: '거래처명' },
    { code: '02', name: '사업자번호' },
    { code: '03', name: '대표자' },
  ];

  const customerKind = [
    { code: '01', name: '매입' },
    { code: '02', name: '매출' },
    { code: '03', name: '혼합' },
  ];

  const customerState = [
    { code: '01', name: '개인사업자' },
    { code: '02', name: '법인사업자' },
    { code: '03', name: '개인' },
  ];

  const useKind = [
    { code: '01', name: '사용' },
    { code: '02', name: '미사용' },
  ];

  const [columnDefs] = useState([
    { headerName: '선택', checkboxSelection: true, headerCheckboxSelection: true, width: 20, align: 'center' },
    { headerName: '거래처코드', field: 'customercode', width: 80, align: 'center', chartype: 'string' },
    { headerName: '거래처명', field: 'customername', width: 128, align: 'left', chartype: 'string' },
    { headerName: '사업자번호', field: 'customerNo', width: 100, align: 'center', chartype: 'string' },
    { headerName: '신용등급', field: 'grade', width: 80, align: 'center', chartype: 'string' },
    { headerName: '대표자', field: 'customerCeo', width: 100, align: 'left', chartype: 'string' },
    { headerName: '거래처구분', field: 'customerKind', width: 80, align: 'center', chartype: 'string' },
    { headerName: '거래처유형', field: 'customerState', width: 100, align: 'center', chartype: 'string' },
    { headerName: '업태', field: 'typeBusiness', width: 100, align: 'center', chartype: 'string' },
    { headerName: '종목', field: 'businessCategory', width: 100, align: 'center', chartype: 'string' },
    { headerName: '연락처', field: 'telNo', width: 100, align: 'left', chartype: 'string' },
    { headerName: '이메일', field: 'email', width: 100, align: 'left', chartype: 'string' },
    { headerName: '사용여부', field: 'useKind', switch: true, width: 60, align: 'center' },
  ]);

  const [rowData, setRowData] = useState([
    { customercode: '00001', customername: '미래컴퓨터연합시스템협동조합', customerNo: 'Toyota',  grade: 'Celica',  customerCeo: 35000, useKind: 'true', businessCategory: '20240911', telNo: '00001', email: '00001' },
    { customercode: '00002', customername: '김영철', customerNo: 'Toyota',  grade: 'Celica',  customerCeo: 35000, useKind: 'true', businessCategory: '20240912', telNo: '00002', email: '00002' },
    { customercode: '00003', customername: '안성준', customerNo: 'Toyota',  grade: 'Celica',  customerCeo: 35000, useKind: 'true', businessCategory: '20240913', telNo: '00003', email: '00003' },
    { customercode: '00004', customername: '양무리', customerNo: 'Ford',    grade: 'Mondeo',  customerCeo: 32000, useKind: 'true', businessCategory: '20240914', telNo: '00004', email: '00004' },
    { customercode: '00005', customername: '공한택', customerNo: 'Porsche', grade: 'Boxster', customerCeo: 72000, useKind: 'true', businessCategory: '20240915', telNo: '00005', email: '00005' },
    { customercode: '00006', customername: '임소율', customerNo: 'Porsche', grade: 'Boxster', customerCeo: 72000, useKind: 'true', businessCategory: '20240916', telNo: '00006', email: '00006' },
    { customercode: '00007', customername: '김유화', customerNo: 'Porsche', grade: 'Boxster', customerCeo: 72000, useKind: 'true', businessCategory: '20240917', telNo: '00007', email: '00007' },
    { customercode: '00008', customername: '이상화', customerNo: 'Porsche', grade: 'Boxster', customerCeo: 72000, useKind: 'true', businessCategory: '20240918', telNo: '00008', email: '00008' },
    { customercode: '00009', customername: '김형준', customerNo: 'Porsche', grade: 'Boxster', customerCeo: 72000, useKind: 'true', businessCategory: '20240919', telNo: '00009', email: '00009' },
    { customercode: '00010', customername: '김다래', customerNo: 'Porsche', grade: 'Boxster', customerCeo: 72000, useKind: 'true', businessCategory: '20240910', telNo: '00010', email: '00010' },
    { customercode: '00011', customername: '김준석', customerNo: 'Porsche', grade: 'Boxster', customerCeo: 72000, useKind: 'true', businessCategory: '20240911', telNo: '00011', email: '00011' },
    { customercode: '00012', customername: '이대호', customerNo: 'Porsche', grade: 'Boxster', customerCeo: 72000, useKind: 'true', businessCategory: '20240912', telNo: '00012', email: '00012' },
    { customercode: '00013', customername: '김주석', customerNo: 'Porsche', grade: 'Boxster', customerCeo: 72000, useKind: 'true', businessCategory: '20240913', telNo: '00013', email: '00013' },
    { customercode: '00014', customername: '염동엽', customerNo: 'Porsche', grade: 'Boxster', customerCeo: 72000, useKind: 'true', businessCategory: '20240914', telNo: '00014', email: '00014' },
    { customercode: '00015', customername: '전준우', customerNo: 'Porsche', grade: 'Boxster', customerCeo: 72000, useKind: 'true', businessCategory: '20240915', telNo: '00015', email: '00015' },
    { customercode: '00001', customername: '홍길동', customerNo: 'Toyota',  grade: 'Celica',  customerCeo: 35000, useKind: 'true', businessCategory: '20240911', telNo: '00001', email: '00001' },
    { customercode: '00002', customername: '김영철', customerNo: 'Toyota',  grade: 'Celica',  customerCeo: 35000, useKind: 'true', businessCategory: '20240912', telNo: '00002', email: '00002' },
    { customercode: '00003', customername: '안성준', customerNo: 'Toyota',  grade: 'Celica',  customerCeo: 35000, useKind: 'true', businessCategory: '20240913', telNo: '00003', email: '00003' },
    { customercode: '00004', customername: '양무리', customerNo: 'Ford',    grade: 'Mondeo',  customerCeo: 32000, useKind: 'true', businessCategory: '20240914', telNo: '00004', email: '00004' },
    { customercode: '00005', customername: '공한택', customerNo: 'Porsche', grade: 'Boxster', customerCeo: 72000, useKind: 'true', businessCategory: '20240915', telNo: '00005', email: '00005' },
    { customercode: '00006', customername: '임소율', customerNo: 'Porsche', grade: 'Boxster', customerCeo: 72000, useKind: 'true', businessCategory: '20240916', telNo: '00006', email: '00006' },
    { customercode: '00007', customername: '김유화', customerNo: 'Porsche', grade: 'Boxster', customerCeo: 72000, useKind: 'true', businessCategory: '20240917', telNo: '00007', email: '00007' },
    { customercode: '00008', customername: '이상화', customerNo: 'Porsche', grade: 'Boxster', customerCeo: 72000, useKind: 'true', businessCategory: '20240918', telNo: '00008', email: '00008' },
    { customercode: '00009', customername: '김형준', customerNo: 'Porsche', grade: 'Boxster', customerCeo: 72000, useKind: 'true', businessCategory: '20240919', telNo: '00009', email: '00009' },
    { customercode: '00010', customername: '김다래', customerNo: 'Porsche', grade: 'Boxster', customerCeo: 72000, useKind: 'true', businessCategory: '20240910', telNo: '00010', email: '00010' },
    { customercode: '00011', customername: '김준석', customerNo: 'Porsche', grade: 'Boxster', customerCeo: 72000, useKind: 'true', businessCategory: '20240911', telNo: '00011', email: '00011' },
    { customercode: '00012', customername: '이대호', customerNo: 'Porsche', grade: 'Boxster', customerCeo: 72000, useKind: 'true', businessCategory: '20240912', telNo: '00012', email: '00012' },
    { customercode: '00013', customername: '김주석', customerNo: 'Porsche', grade: 'Boxster', customerCeo: 72000, useKind: 'true', businessCategory: '20240913', telNo: '00013', email: '00013' },
    { customercode: '00014', customername: '염동엽', customerNo: 'Porsche', grade: 'Boxster', customerCeo: 72000, useKind: 'true', businessCategory: '20240914', telNo: '00014', email: '00014' },
    { customercode: '00015', customername: '전준우', customerNo: 'Porsche', grade: 'Boxster', customerCeo: 72000, useKind: 'true', businessCategory: '20240915', telNo: '00015', email: '00015' }
  ]);


  const [searchComboState, setSearchComboState] = useState("");

  const comboClick = (searchState) => {
    setSearchComboState(searchState); 
  };

  const buttonClick = (buttonType) => {
  };

  const boxRadioClick = (radioType) => {
  };

  return (
    <div className="client-information">
      <div className="client-information-search-wrap">
        <div className="client-information-search-condition">
          <div className="client-information-search-btn">
            <div className="client-information-search-label">검색기준</div>
            <div>
              <KbComboInButton comboDataProp={director} userProp={"00"} comboWidthProp={80} comboHeightProp={24} onClick={comboClick} />
            </div>
            <div className="client-information-search-input">
              <input type="text" />
            </div>
            <Kbbutton textProp={"조회"} iconProp={"검색"} onClick={() => buttonClick("조회")} />
          </div>
          <KbBoxRadioButton itemProp={"거래처 구분"} itemDatasProp={customerKind} allCheckProp={true} onClick={boxRadioClick} />
          <KbBoxRadioButton itemProp={"거래처 유형"} itemDatasProp={customerState} allCheckProp={true} onClick={boxRadioClick} />
          <KbBoxRadioButton itemProp={"사용여부"} itemDatasProp={useKind} allCheckProp={true} onClick={boxRadioClick} />
        </div>
      </div>
      <div className="client-information-search-grid">
        <KbGrid
          columnDefsProp={columnDefs} // 컬럼 정의
          rowDataProp={rowData} // 데이터
          rowSelectionProp={true} // 여러 행 선택 가능
          paginationProp={true} // 페이징 활성화
          paginationPageSizeProp={17} // 페이지당 10개 행 표시
          checkedCountProp={true}
          searchProp={false}
          excellProp={"3"} //"1: 엑셀다운, 2:엑셀다운/엑셀업, 3:엑셀다운/엑셀업/엑셀양식, 4:엑셀업/엑셀양식"
          curdProp={"5"} //"1:등록, 2:수정, 3:삭제, 4:등록/수정, 5:등록/수정/삭제, 6:등록/삭제, 7:수정/삭제
          insertComponentProp={Form4}
          updateComponentProp={Form4}
        />
      </div>
    </div>
  );
}

export default ClientInformation;
