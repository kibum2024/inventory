import React, { useState, forwardRef, useImperativeHandle, useRef, useEffect } from 'react';
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";
import Kbbutton from './components/kbcomponents/KbButton';
import Form1 from './components/form/Form1';
import Form2 from './components/form/Form2';
import Form3 from './components/form/Form3';
import UserManagement from './components/form/UserManagement';


const KbTabs = forwardRef((props, ref) => {
  const [tabs, setTabs] = useState([{ title: '메인', content: 'This is the 메인 page.', component: <Form1 /> }]); // 메인 탭 기본 생성
  const [activeTab, setActiveTab] = useState('메인'); // 초기 활성화 탭은 메인
  const tabsContainerRef = useRef(null);
  const [totalTabsWidth, setTotalTabsWidth] = useState(0);  // 모든 탭의 총 길이
  const tabRefs = useRef([]);  // 개별 탭의 참조 배열

  const componentMap = {
    Form1: <Form1 />,
    Form2: <Form2 />,
    Form3: <Form3 />,
    UserManagement: <UserManagement />,
    // 추가적인 컴포넌트들을 여기에 매핑
  };

  useEffect(() => {
    // 개별 탭의 너비를 모두 합산
    const totalWidth = tabRefs.current.reduce((acc, tab) => {
      return acc + (tab ? tab.offsetWidth : 0);  // null 또는 undefined가 아닐 때만 너비 더함
    }, 0);
    setTotalTabsWidth(totalWidth);  // 총 길이를 상태에 저장
    console.log("totalWidth : ", totalWidth);

    // 창 크기가 변경될 때 다시 계산
    const handleResize = () => {
      const totalWidth = tabRefs.current.reduce((acc, tab) => {
        return acc + (tab ? tab.offsetWidth : 0);
      }, 0);
      setTotalTabsWidth(totalWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [tabs]);

  const addTab = (title, componentName) => {
    if (totalTabsWidth > 970) {
      alert("더 이상 탭을 열 수가 없습니다.");
    } else {
      // 같은 탭이 이미 있는지 확인
      if (tabs.find((tab) => tab.title === title)) {
        setActiveTab(title); // 이미 존재하는 탭이면 활성화
        return;
      }
  
      // 컴포넌트 매핑 객체에서 컴포넌트 찾기
      const component = componentMap[componentName];
  
      // 만약 해당 컴포넌트가 존재하지 않으면 에러 처리
      if (!component) {
        alert(`${componentName} 컴포넌트를 찾을 수 없습니다.`);
        return;
      }
      // 새로운 탭 생성
      const newTab = { title, content: `This is the ${title} page.`, component };  // 해당 컴포넌트를 탭에 추가
      setTabs([...tabs, newTab]);
      setActiveTab(title);
    }
  };

  // 탭을 닫는 함수
  const removeTab = (title) => {
    if (title === '메인') return; // 메인 탭은 닫을 수 없도록 함
    const newTabs = tabs.filter((tab) => tab.title !== title);
    setTabs(newTabs);
    // 닫은 탭이 현재 활성화된 탭이면, 다른 탭으로 변경
    if (newTabs.length > 0) {
      setActiveTab(newTabs[newTabs.length - 1].title);
    } else {
      setActiveTab('메인'); // 모든 탭이 닫히면 메인 탭을 활성화
    }
  };

  // 모든 탭을 닫는 함수 (메인 탭 제외)
  const removeAllTabs = () => {
    setTabs([{ title: '메인', content: 'This is the 메인 page.' }]); // 메인 탭만 남김
    setActiveTab('메인'); // 메인 탭을 활성화
  };

  // 부모 컴포넌트에서 이 함수를 호출할 수 있도록 설정
  useImperativeHandle(ref, () => ({
    addTab,
  }));

  const buttonClick = (buttonType) => {
    removeAllTabs(); // '모두닫기' 버튼 클릭 시 메인 탭 제외하고 모두 닫기
  };

  // 탭을 왼쪽으로 스크롤
  const scrollLeft = () => {
    console.log("tabsContainerRef : aaaa");
    tabsContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  // 탭을 오른쪽으로 스크롤
  const scrollRight = () => {
    console.log("tabsContainerRef : bbbbb");
    tabsContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <div>
        <div
          ref={tabsContainerRef}
          style={{
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
            width: 'auto',
            height: '25px',
            lineHeight: '25px',
            fontWeight: 'bold',
            padding: '10px 0px 0px 10px',
            backgroundColor: 'rgb(242, 242, 242)',
            position: 'relative',
            overflowX: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          {tabs.map((tab, index) => (
            <div
              key={tab.title}
              ref={(el) => (tabRefs.current[index] = el)}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px 10px',
                margin: '0px 5px',
                width: 'fit-content',
                height: '25px',
                backgroundColor: activeTab === tab.title ? 'white' : 'rgb(222, 220, 217)',
                border: 'none',
                borderRadius: '8px 8px 0 0',
                outline: 'none',
                transition: 'background-color 0.3s',
                fontSize: '12px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                cursor: 'pointer',
              }}
            >
              <div
                onClick={() => setActiveTab(tab.title)}
              >
                {tab.title}
              </div>
              {tab.title !== '메인' && ( // 메인 탭은 닫기 버튼을 표시하지 않음
                <div
                  style={{
                    paddingLeft: '5px',
                  }}
                  onClick={() => removeTab(tab.title)}
                >
                  <IoClose
                    size={14}
                    color="rgb(127, 127, 127)"
                    style={{
                      paddingTop: '9px',
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: '45px',
            right: '5px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <button
              onClick={scrollLeft}
              style={{
                height: '25px',
                lineHeight: '25px',
                padding: '2px',
                backgroundColor: 'transparent',
                border: '1px solid #ccc',
                cursor: 'pointer',
                borderRadius: '8px 0 0 8px',
                display: totalTabsWidth > 9000 ? 'block' : 'none',
              }}
            >
              <IoChevronBack 
                size={20}
              />
            </button>
            <button
              onClick={scrollRight}
              style={{
                height: '25px',
                lineHeight: '25px',
                padding: '2px',
                backgroundColor: 'transparent',
                border: '1px solid #ccc',
                cursor: 'pointer',
                borderRadius: ' 0 8px 8px 0',
                display: totalTabsWidth > 9000 ? 'block' : 'none',
                marginRight: '5px',
              }}
            >
              <IoChevronForward 
                size={20}
              />
            </button>
          </div>
          <Kbbutton typeProp="closeTextButton" textProp={'모두닫기'} onClick={() => buttonClick('삭제')} />
        </div>
      </div>

      <div
        style={{
          height: '620px',
        }}
      > {activeTab && tabs.find((tab) => tab.title === activeTab)?.component}
      </div>
    </div>
  );
});

export default KbTabs;
