import React, { useRef, useState, useEffect } from 'react';
import KbTabs from './KbTabs';
import { IoListCircleOutline, IoEllipsisVerticalSharp, IoFileTrayFullOutline, IoReceiptOutline, IoPersonAddOutline, IoDocumentAttachOutline, IoNewspaperOutline } from "react-icons/io5";
import { HiOutlineBuildingOffice2, HiOutlineCog8Tooth  } from "react-icons/hi2";

function KbSideMenu() {
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
    { menuId: '16', menuCode1: '07', menuCode2: '02', menuCode3: '02', menuName: '거래처정보', menuLevel: '3', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: 'ClientInformation' },
    { menuId: '17', menuCode1: '07', menuCode2: '02', menuCode3: '03', menuName: '품목정보', menuLevel: '3', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: 'Form2' },
    { menuId: '18', menuCode1: '07', menuCode2: '03', menuCode3: '00', menuName: '고정자산', menuLevel: '2', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: '' },
    { menuId: '19', menuCode1: '07', menuCode2: '03', menuCode3: '01', menuName: '고정자산정보', menuLevel: '3', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: 'Form3' },
    { menuId: '20', menuCode1: '07', menuCode2: '03', menuCode3: '02', menuName: '미상각자산감가상각명세서', menuLevel: '3', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: 'Form2' },
    { menuId: '21', menuCode1: '07', menuCode2: '03', menuCode3: '03', menuName: '양도자산감가상각명세서', menuLevel: '3', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: 'Form3' },
    { menuId: '22', menuCode1: '07', menuCode2: '04', menuCode3: '00', menuName: '계정과목', menuLevel: '2', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: '' },
    { menuId: '23', menuCode1: '07', menuCode2: '04', menuCode3: '01', menuName: '계정과목', menuLevel: '3', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: 'Form2' },
    { menuId: '24', menuCode1: '07', menuCode2: '05', menuCode3: '00', menuName: '사용자관리', menuLevel: '2', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: '' },
    { menuId: '25', menuCode1: '07', menuCode2: '05', menuCode3: '01', menuName: '사용자등록 및 권한관리', menuLevel: '3', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: 'UserManagement' },
    { menuId: '26', menuCode1: '07', menuCode2: '06', menuCode3: '00', menuName: '업무설정', menuLevel: '2', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: '' },
    { menuId: '27', menuCode1: '07', menuCode2: '06', menuCode3: '01', menuName: '회계업무설정', menuLevel: '3', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: 'Form2' },
    { menuId: '28', menuCode1: '07', menuCode2: '06', menuCode3: '02', menuName: '급여업무설정', menuLevel: '3', menuUseYn: '1', menuIconYn: '0', menuIcon: '', menuComponent: 'Form3' }
  ];

  const iconMap = {
    IoListCircleOutline: IoListCircleOutline,
    IoEllipsisVerticalSharp: IoEllipsisVerticalSharp,
    IoFileTrayFullOutline: IoFileTrayFullOutline,
    IoReceiptOutline: IoReceiptOutline,
    IoPersonAddOutline: IoPersonAddOutline,
    IoDocumentAttachOutline: IoDocumentAttachOutline,
    IoNewspaperOutline: IoNewspaperOutline,
    HiOutlineBuildingOffice2: HiOutlineBuildingOffice2,
    HiOutlineCog8Tooth: HiOutlineCog8Tooth,
  };  

  const tabsRef = useRef(null);
  const [selectedMenuCode1, setSelectedMenuCode1] = useState(menuItems[0].menuCode1);
  const [selectedMenuCode1Name, setSelectedMenuCode1Name] = useState(menuItems[0].menuName);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const DynamicIcon = ({ iconName, size = 24, color = "black" }) => {
    // 매핑된 아이콘에서 아이콘 이름으로 해당 컴포넌트를 찾음
    const IconComponent = iconMap[iconName];
  
    // 아이콘이 존재하면 렌더링, 없으면 기본값 렌더링
    return IconComponent ? <IconComponent size={size} color={color} /> : <p>아이콘 없음</p>;
  };

  const addTabToTabs = (tabName, componentName) => {
    if (tabsRef.current) {
      tabsRef.current.addTab(tabName, componentName);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // 브라우저 창 크기 변경 시 크기 업데이트
    window.addEventListener('resize', handleResize);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const menuCode1Click = (menuCode1, menuName) => {
    setSelectedMenuCode1(menuCode1);
    setSelectedMenuCode1Name(menuName);
  }

  return (
    <div
      style={{
        display: 'flex', 
        width: `${windowSize.width}px`,
        height: `${windowSize.height - 25}px`,
        }}
    >
      <div 
        style={{
          backgroundColor: 'rgb(0, 55, 118)', 
          borderRadius: '0px 15px 15px 0px',
          color: 'white',
          height: '100%',
          width: '210px',
          padding: '10px 0px'
        }}
      >
        <div
          style={{
            color: 'rgb(95, 145, 214)',
            height: '50px',
            width: '195px',
            padding: '10px 0px',
            fontWeight: 'bold',
            borderBottom: '1px solid rgb(95, 145, 214)',
            margin: '0px 0px 0px 5px',
          }}
        >
          <div
            style={{
              height: '25px',
              textAlign: 'left',
              marginLeft: '15px',
            }}
          >(주) 마이웨이</div>
          <div
            style={{
              width: '150px',
              height: '25px',
              lineHeight: '25px',
              textAlign: 'center',
              borderRadius: '8px',
              border: '1px solid rgb(95, 145, 214)',
              marginLeft: '15px',
            }}
          >2024년 (25기)</div>
        </div>
        <div
          style={{
            padding: '10px 0px 0px 20px',
            width: '210px',
          }}
        >
          <div
            style={{
              height: '40px',
              lineHeight: '40px',
              textAlign: 'left',
              fontWeight: 'bold',
            }}
          >{selectedMenuCode1Name}</div>
          {menuItems.filter(menu => menu.menuLevel !== "1" && menu.menuCode1 === selectedMenuCode1)
            .map((item, index) => (
              <div key={index} style={{position: 'relative'}}>
                { item.menuLevel === "2" ? 
                  <div style={{display: 'flex'}}>
                    <div 
                      style={{
                        height: '30px', 
                        lineHeight: '30px', 
                        cursor: 'pointer',
                        textAlign: 'left',
                        position: 'absolute',
                        top: '3px',
                        left: '-8px',
                      }}
                    >
                      <IoListCircleOutline size={'16'} color={'rgb(95, 145, 214)'}/>
                    </div>
                    <div
                      style={{
                        height: '30px', 
                        lineHeight: '30px', 
                        cursor: 'pointer',
                        textAlign: 'left',
                        paddingLeft: '10px'
                      }}
                    >
                      {item.menuName}
                    </div>
                  </div>
                  :
                  <div
                    style={{
                      height: '30px', 
                      lineHeight: '30px', 
                      cursor: 'pointer',
                      textAlign: 'left',
                      borderLeft: '1px solid white',
                      paddingLeft: '10px'
                    }}
                    onClick={() => addTabToTabs(item.menuName, item.menuComponent)}
                    >
                      {item.menuName}
                  </div>
                }
              </div>
            )
          )}
        </div>
      </div>
      <div
        style={{
          width: '100%'
        }}
      >
        <div
          style={{
            display: 'flex', 
            justifyContent: 'left',
            alignItems: 'center',
            height: '40px',
            lineHeight: '40px',
            borderTop: '1px solid rgb(202, 202, 200)',
            borderBottom: '1px solid rgb(202, 202, 200)',
            padding: '0px 10px',
          }}
        >
          <div
            style={{
              display: 'flex', 
              justifyContent: 'left',
              alignItems: 'center',
              width: '80%'
            }}
          >
            {menuItems.filter(menu => menu.menuLevel === "1")
              .map((item, index) => (
                <div
                  style={{
                    display: 'flex', 
                    justifyContent: 'left',
                    alignItems: 'center',
                    width: 'auto',
                    padding: '0px 10px',
                    cursor: 'pointer',
                  }}
                  onClick={() => menuCode1Click(item.menuCode1, item.menuName)}
                >
                  <div
                    style={{
                      height: '25px',
                      lineHeight: '25px',
                      paddingTop: '4px'
                    }}
                  >
                    <DynamicIcon iconName={item.menuIcon} size={20} color="rgb(127, 127, 127)" />
                  </div>
                  <div
                    style={{
                      height: '25px',
                      lineHeight: '25px',
                      width: 'auto',
                      padding: '0px 6px'
                    }}
                  >
                    {item.menuName}
                  </div>
                </div>
            ))}    
          </div>
          <div
            style={{
              display: 'flex', 
              justifyContent: 'left',
              alignItems: 'center',
              width: '20%'
            }}
          >
            로그인
          </div>
        </div>
        <div
          style={{
            height: `${windowSize.height - 48}px`,
          }}
        >
          <KbTabs ref={tabsRef} />
        </div>
      </div>
    </div>
  );
}

export default KbSideMenu;
