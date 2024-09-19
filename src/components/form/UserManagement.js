import React, { useState } from 'react';
import KbButton from '../kbcomponents/KbButton';
import KbGrid from '../kbcomponents/KbGrid';
import KbRadioButton from '../kbcomponents/KbRadioButton';
import KbCheckboxListStep3 from '../kbcomponents/KbCheckboxListStep3';
import './UserManagement.css'; 

const UserManagement = () => {
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('finger123');
  const [password, setPassword] = useState('f1212!');
  const [email, setEmail] = useState('');

  const [columnDefs] = useState([
    { headerName: 'No', numbering: true, width: 50, align: 'center'},
    { headerName: '사용자명', field: 'userName', width: 190, align: 'left', chartype: 'string', search: true},
    { headerName: '아이디', field: 'userId',  width: 200, align: 'left', chartype: 'string', search: true},
    { headerName: '구분', field: 'registerClassify', width: 100, align: 'center',  chartype: 'string'},
  ]);

  const [rowData, setRowData] = useState([
    { userName: '홍길동', userId: 'a11111', registerClassify: '직접등록'},
    { userName: '박영철', userId: 'a11112', registerClassify: '직접등록'},
    { userName: '김민진', userId: 'a11113', registerClassify: '직접등록'},
    { userName: '김묘진', userId: 'a11114', registerClassify: '직접등록'},
    { userName: '배현민', userId: 'a11115', registerClassify: '직접등록'},
    { userName: '장종욱', userId: 'a11116', registerClassify: '직접등록'},
    { userName: '홍길동', userId: 'a11111', registerClassify: '직접등록'},
    { userName: '박영철', userId: 'a11112', registerClassify: '직접등록'},
    { userName: '김민진', userId: 'a11113', registerClassify: '직접등록'},
    { userName: '김묘진', userId: 'a11114', registerClassify: '직접등록'},
    { userName: '배현민', userId: 'a11115', registerClassify: '직접등록'},
    { userName: '장종욱', userId: 'a11116', registerClassify: '직접등록'},
    { userName: '홍길동', userId: 'a11111', registerClassify: '직접등록'},
    { userName: '박영철', userId: 'a11112', registerClassify: '직접등록'},
    { userName: '김민진', userId: 'a11113', registerClassify: '직접등록'},
    { userName: '김묘진', userId: 'a11114', registerClassify: '직접등록'},
    { userName: '배현민', userId: 'a11115', registerClassify: '직접등록'},
    { userName: '장종욱', userId: 'a11116', registerClassify: '직접등록'},
    { userName: '홍길동', userId: 'a11111', registerClassify: '직접등록'},
    { userName: '박영철', userId: 'a11112', registerClassify: '직접등록'},
    { userName: '김민진', userId: 'a11113', registerClassify: '직접등록'},
    { userName: '김묘진', userId: 'a11114', registerClassify: '직접등록'},
    { userName: '배현민', userId: 'a11115', registerClassify: '직접등록'},
    { userName: '장종욱', userId: 'a11116', registerClassify: '직접등록'},
  ]);

  const registerClassify =  [ 
    {code: '01', name: '사원 정보'},
    {code: '02', name: '직접 등록'},
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

  const buttonClick = (buttonType) => {
    console.log(`${buttonType} 버튼이 클릭되었습니다.`);
  };

  const boxRadioClick = (buttonType) => {
    console.log(`${buttonType} 버튼이 클릭되었습니다.`);
  };

  const handleCategoryClick = (checkMenu) => {
    console.log(`${checkMenu} 버튼이 클릭되었습니다.`);
  };

  return (
    <div className="user-management">
      <div className='menu-navigate'>기초정보  사용자등록 및 권한관리</div>
      <div className="user-management-wrap">
        <div className="user-management-left-panel">
          {/* <div className='user-management-search-wrap'>
            <input type="text" placeholder="사용자명, 아이디 입력" style={{width: '200px'}} />
            <KbButton typeProp="searchButton"  textProp={""} onClick={() => buttonClick('검색')}/>
            <KbButton typeProp="initButton"  textProp={"초기화"} onClick={() => buttonClick('초기화')}/>
          </div> */}
          <div className='user-management-list-wrap'>
            <div className='user-management-list-header'>
              <div className='user-management-list-title'>사용자 리스트</div>
              <KbButton typeProp="addButton"  textProp={"등록"} onClick={() => buttonClick('등록')}/>
            </div>
            <div className='user-management-list-grid'>
              <KbGrid
                columnDefsProp = {columnDefs} // 컬럼 정의
                rowDataProp = {rowData} // 데이터
                rowSelectionProp = {false} // 여러 행 선택 가능
                paginationProp = {true} // 페이징 활성화
                paginationPageSizeProp = {15} // 페이지당 10개 행 표시
              />
            </div>  
          </div>
        </div>
        <div className="user-management-right-panel">
          <div className="user-management-update-wrap">
            <div className="user-management-update">
              <div>* 수정 후 저장버튼을 꼭 눌러주세요.</div>
              <div className="user-management-update-button-wrap">
                <KbButton typeProp="saveButton"  textProp={"저장"} onClick={() => buttonClick('저장')}/>
                <KbButton typeProp="deleteButton"  textProp={""} onClick={() => buttonClick('삭제')}/>
              </div>
            </div>  
            <div className="user-management-update-item-wrap">
              <div className="user-management-update-item-input">
                <KbRadioButton  itemProp = {"등록구분"} widthProp = {"90"} itemDatasProp = {registerClassify} onClick={boxRadioClick} />
              </div>
              <div className="user-management-update-item-input">
                <label htmlFor="" className="user-management-input-label">사용자명<span className='compulsory-item'>*</span></label>
                <input type="text" className='user-management-update-name'/>
              </div>
              <div className="user-management-update-item-input">
                <label htmlFor="" className="user-management-input-label">아이디<span className='compulsory-item'>*</span></label>
                <input type="text" />
                <label htmlFor="" className="user-management-input-label space-blank">비밀번호<span className='compulsory-item'>*</span></label>
                <input type="text" />
              </div>
              <div className="user-management-update-item-input">
                <label htmlFor="" className="user-management-input-label">부서</label>
                <input type="text" />
                <label htmlFor="" className="user-management-input-label space-blank">직책</label>
                <input type="text" />
              </div>
              <div className="user-management-update-item-input">
                <label htmlFor="" className="user-management-input-label">휴대폰번호</label>
                <input type="text" />
                <label htmlFor="" className="user-management-input-label space-blank">이메일</label>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="user-management-title">권한관리</div>
          <div className="user-management-provisioning">
            {/* <div className="user-management-menuCode1"> */}
            <div>
              <KbCheckboxListStep3  menuItems={menuItems} onCheckedMenuIdsChange={handleCategoryClick} />
            </div>
            {/* <div className="user-management-menuCode3">

            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
