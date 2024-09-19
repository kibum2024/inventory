import React, { useState, forwardRef, useImperativeHandle, useRef, useEffect } from 'react';
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";
import Kbbutton from './components/kbcomponents/KbButton';
import Form1 from './components/form/Form1';
import Form2 from './components/form/Form2';
import Form3 from './components/form/Form3';
import UserManagement from './components/form/UserManagement';

// 로컬 스토리지에 저장하는 함수
const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// 로컬 스토리지에서 불러오는 함수
const loadFromLocalStorage = (key, defaultValue) => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : defaultValue;
};

const KbTabs = forwardRef((props, ref) => {
  // 로컬 스토리지에서 초기 탭 정보 및 상태 불러오기
  const [tabs, setTabs] = useState(loadFromLocalStorage('tabs', [{ title: '메인', content: 'This is the 메인 page.', component: 'Form1' }]));
  const [activeTab, setActiveTab] = useState(loadFromLocalStorage('activeTab', '메인'));
  const [tabStates, setTabStates] = useState(loadFromLocalStorage('tabStates', {
    Form1: {},
    Form2: {},
    Form3: {},
    UserManagement: {},
  }));
  const tabsContainerRef = useRef(null);
  const [totalTabsWidth, setTotalTabsWidth] = useState(0);
  const tabRefs = useRef([]);

  const componentMap = {
    Form1: <Form1 formData={tabStates['Form1']} setFormData={(data) => updateTabState('Form1', data)} />,
    Form2: <Form2 formData={tabStates['Form2']} setFormData={(data) => updateTabState('Form2', data)} />,
    Form3: <Form3 formData={tabStates['Form3']} setFormData={(data) => updateTabState('Form3', data)} />,
    UserManagement: <UserManagement formData={tabStates['UserManagement']} setFormData={(data) => updateTabState('UserManagement', data)} />,
  };

  useEffect(() => {
    const totalWidth = tabRefs.current.reduce((acc, tab) => {
      return acc + (tab ? tab.offsetWidth : 0);
    }, 0);
    setTotalTabsWidth(totalWidth);

    const handleResize = () => {
      const totalWidth = tabRefs.current.reduce((acc, tab) => {
        return acc + (tab ? tab.offsetWidth : 0);
      }, 0);
      setTotalTabsWidth(totalWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [tabs]);

  const updateTabState = (tabKey, data) => {
    const newTabStates = { ...tabStates, [tabKey]: data };
    setTabStates(newTabStates);
    saveToLocalStorage('tabStates', newTabStates); // 로컬 스토리지에 탭 상태 저장
  };

  const addTab = (title, componentName) => {
    if (tabs.find((tab) => tab.title === title)) {
      setActiveTab(title);
      saveToLocalStorage('activeTab', title); // 로컬 스토리지에 현재 활성화된 탭 저장
      return;
    }

    const component = componentMap[componentName];
    if (!component) {
      alert(`${componentName} 컴포넌트를 찾을 수 없습니다.`);
      return;
    }
    const newTab = { title, content: `This is the ${title} page.`, component: componentName };
    const updatedTabs = [...tabs, newTab];
    setTabs(updatedTabs);
    setActiveTab(title);

    saveToLocalStorage('tabs', updatedTabs); // 로컬 스토리지에 탭 목록 저장
    saveToLocalStorage('activeTab', title); // 로컬 스토리지에 현재 활성화된 탭 저장
  };

  const removeTab = (title) => {
    if (title === '메인') return; // 메인 탭은 닫을 수 없도록 함
    const newTabs = tabs.filter((tab) => tab.title !== title);
    setTabs(newTabs);
    if (newTabs.length > 0) {
      const lastTab = newTabs[newTabs.length - 1].title;
      setActiveTab(lastTab);
      saveToLocalStorage('activeTab', lastTab);
    } else {
      setActiveTab('메인');
      saveToLocalStorage('activeTab', '메인');
    }
    saveToLocalStorage('tabs', newTabs); // 로컬 스토리지에 탭 목록 저장
  };

  const removeAllTabs = () => {
    setTabs([{ title: '메인', content: 'This is the 메인 page.' }]);
    setActiveTab('메인');
    saveToLocalStorage('tabs', [{ title: '메인', content: 'This is the 메인 page.' }]);
    saveToLocalStorage('activeTab', '메인');
  };

  useImperativeHandle(ref, () => ({
    addTab,
  }));

  const scrollLeft = () => {
    tabsContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    tabsContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
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
              onClick={() => setActiveTab(tab.title)}
            >
              {tab.title}
              {tab.title !== '메인' && (
                <div
                  style={{ paddingLeft: '5px' }}
                  onClick={() => removeTab(tab.title)}
                >
                  <IoClose size={14} color="rgb(127, 127, 127)" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '45px', right: '5px' }}>
          <Kbbutton typeProp="closeTextButton" textProp={'모두닫기'} onClick={removeAllTabs} />
        </div>
      </div>

      <div style={{ height: '620px' }}>
        {activeTab && componentMap[tabs.find((tab) => tab.title === activeTab)?.component]}
      </div>
    </div>
  );
});

export default KbTabs;
