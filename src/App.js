import React, { useRef } from 'react';
// import { Routes, Route, Link, Navigate, useNavigate, useLocation } from 'react-router-dom';
import ItemCode from './components/kbcomponents/ItemCode';
// import DateInput from './components/DateInput';
import './App.css';
import KbSideMenu from './KbSideMenu';

function App() {

  const tabsRef = useRef(null);

  // Menu에서 클릭할 때 Tabs에 탭을 추가하는 함수
  const addTabToTabs = (tabName) => {
    if (tabsRef.current) {
      tabsRef.current.addTab(tabName);
    }
  };

  return (
    <div className='app-wrap'>
      <div className='header-main-wrap'>
        <ItemCode/>
      </div>
      <div className='container-main-wrap'>
        <div className="App" style={{display: 'flex'}}>
          <div style={{width: '200px'}}>
            {/* <KbMenu addTab={addTabToTabs} /> */}
            {/* <KbSideMenu /> */}
          </div>
        </div>
        {/* <Routes> */}
        {/* <Route path="/" element={<Navigate to="/content/home" />} ></Route>
            <Route path="/users/login" element={<Login />} ></Route>  */}
        {/* <Route path="/home" element={<MainContent />} ></Route> 
            <Route path="/brandstory" element={<BrandStory stateProp ={true}/>} >
              <Route path="story" element={<Story />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="/item" element={<ItemIntroduce />} ></Route>
            <Route path="/shopping" element={<Shopping onImageClick={handleImageClick}/>}>
              <Route path="ShoppingNewItem" element={<ShoppingNewItem onImageClick={handleImageClick}/>}></Route>
            </Route>
            <Route path="/qna" element={<BrandStory stateProp ={false}/>} >
              <Route path="story" element={<Story />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="/item-order" element={<ItemOrder  itemNoProp={selectedItemNo} />} /> */}
        {/* </Routes> */}
      </div>
      <div className='footer-main-wrap'>
        {/* <FooterMain></FooterMain>        */}
      </div>
    </div>
  );
}

export default App;
