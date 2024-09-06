import React, { useState, useEffect } from 'react';
import './SearchInput.css';
import { FaSearch } from 'react-icons/fa';

function SearchInput({ itemName, inputDatas }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [inputCode, setInputCode] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputSearchName, setInputSearchName] = useState('');
  const [filterDatas, setFilterDatas] = useState(inputDatas);
  
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const InputDataFind = (e) => {
    if (e.key === 'Enter') {
      const result = inputDatas.find(inputData => inputData.name.includes(inputCode));
      
      if (result) {
        setInputCode(result.code);
        setInputName(result.name);
      } else {
        setInputCode('');
        setInputName('');
      }
    }
  }

  const inputDataChang = (e) => {
    setInputCode(e.target.value);
  }

  const searchInputChange = (e) => {
    setInputSearchName(e.target.value);
  }

  const inputSearch = () => {
    const datas = inputDatas.filter(data => data.name.includes(inputSearchName));
    setFilterDatas(datas);
  }

   const InputDataEnterKey = (e) => {
    if (e.key === 'Enter') {
      inputSearch();
    }
   }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      togglePopup();
    } else if (e.key === 'F3') {
      e.preventDefault();
      inputSearch();
    }
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 이벤트 리스너 등록
    window.addEventListener('keydown', handleKeyDown);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isPopupOpen, inputSearchName]);

  return (
    <div className="search-input-container">
      <label className="search-input-label">{itemName}</label>
      <input type="text" className="search-input-field search-code-input" value={inputCode} placeholder={itemName} onChange={inputDataChang} onKeyDown={InputDataFind}/>
      <div className="search-icon-container" onClick={togglePopup}>
        <FaSearch className="search-icon" />
      </div>
      <input type="text" className="search-input-field search-name-input" value={inputName} disabled />

      {isPopupOpen && (
        <div className="search-popup">
          <div className="search-popup-content">
            <h4>★ {itemName} 검색</h4>
            <input type="text" className='search-popup-input' placeholder="검색어를 입력하세요" onChange={searchInputChange} onKeyDown={InputDataEnterKey}/>
            <button className='search-btn' onClick={inputSearch}>찾기(F3)</button>
          </div>
          <div>
            <div className='search-popup-list'>
              <div className='search-popup-no'>
                <div>No</div>
              </div>
              <div className='search-popup-code'>{itemName}코드</div>
              <div className='search-popup-name-title'>{itemName}명</div>
            </div>
            <div className='search-popup-scroll'>
            {filterDatas.map((inputData, index) => (
              <div key={index} className='search-popup-list'>
                <div className='search-popup-no'>
                  <div>{index + 1}</div>
                </div>
                <div className='search-popup-code'>{inputData.code}</div>
                <div className='search-popup-name'>{inputData.name}</div>
              </div>
            ))}
            </div>
          </div>
          <div>
            <button className='search-close-btn' onClick={togglePopup}>닫기(Esc)</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchInput;
