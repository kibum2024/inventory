import React, { useState, useEffect, useRef } from 'react';
import './SearchInput.css';
import { FaSearch } from 'react-icons/fa';

function SearchInput({ itemName, inputDatas }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [inputCode, setInputCode] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputSearchName, setInputSearchName] = useState('');
  const [filterDatas, setFilterDatas] = useState(inputDatas);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemRefs = useRef([]);
  
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const InputDataFind = (e) => {
    const inputValue = e.target.value;
    
    // 숫자인지 확인하는 정규식
    const isNumber = /^\d+$/.test(inputValue);
  
    // 한글인지 확인하는 정규식
    const isKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(inputValue);
  
    if (e.key === 'Enter' && inputValue !== '') {
      let result;
  
      if (isNumber) {
        // 숫자일 경우 코드로 필터링
        result = inputDatas.find(inputData => inputData.code.includes(inputValue));
      } else if (isKorean) {
        // 한글일 경우 이름으로 필터링
        result = inputDatas.find(inputData => inputData.name.includes(inputValue));
      }
  
      if (result) {
        setInputCode(result.code);
        setInputName(result.name);
      } else {
        setInputCode('');
        setInputName('');
      }
    }
  };

  const inputDataChang = (e) => {
    setInputCode(e.target.value);
  }

  const searchInputChange = (e) => {
    setInputSearchName(e.target.value);
  }

  const inputSearch = () => {
    const datas = inputDatas.filter(data => data.name.includes(inputSearchName));
    setFilterDatas(datas);
    setCurrentIndex(0);
  }

  const InputDataEnterKey = (e) => {
    if (e.key === 'Enter') {
      inputSearch();
    }
  }

  const selectedListEnter = (e, code, name) => {
    if (e.key === 'Enter') {
      selectedInputData(code, name);
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      togglePopup();
    } else if (e.key === 'F3') {
      e.preventDefault();
      inputSearch();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCurrentIndex((prev) => {
        if (prev > 0) {  // currentIndex가 0보다 클 때만 감소
          return prev - 1;
        }
        return prev;  // 더 이상 감소하지 않음
      });
    } else if (e.key === "ArrowDown" && filterDatas.length > 0) {
      e.preventDefault();
      setCurrentIndex((prev) => {
        if (prev < filterDatas.length - 1) {  // currentIndex가 최대 값보다 작을 때만 증가
          return prev + 1;
        }
        return prev;  // 더 이상 증가하지 않음
      });
    }
  };
  
  useEffect(() => {
    // 팝업이 열릴 때만 키보드 이벤트 리스너를 추가
    if (isPopupOpen) {
      window.addEventListener('keydown', handleKeyDown);
      setFilterDatas(inputDatas);
      setCurrentIndex(0);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isPopupOpen]);

  // currentIndex가 변경될 때, 해당 항목으로 스크롤
  useEffect(() => {
    if (itemRefs.current[currentIndex]) {
      itemRefs.current[currentIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',  // 가장 가까운 위치로 스크롤
      });
    }
  }, [currentIndex]);

  const selectedList = (index) => {
    setCurrentIndex(index);
  }
  
  const selectedInputData = (code, name) => {
    setInputCode(code);
    setInputName(name);
    togglePopup();
  }

  return (
    <div className="search-input-wrap">
      <div className='search-input-container'>
        <label className="search-input-label">{itemName}</label>
        <input type="text" className="search-input-field search-code-input" value={inputCode} placeholder={itemName} onChange={inputDataChang} onKeyDown={InputDataFind}/>
        <div className="search-icon-container" onClick={togglePopup}>
          <FaSearch className="search-icon" />
        </div>
        <input type="text" className="search-input-field search-name-input" value={inputName} disabled />

        {isPopupOpen && (
          <div className="search-popup-wrap">
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
                  <div  key={index} 
                        ref={(el) => itemRefs.current[index] = el} // 각 항목에 대한 참조 저장
                        className={`search-popup-list ${currentIndex === index? 'search-popup-active' : ''}`} 
                        onClick={() => {selectedList(index)}} 
                        onDoubleClick={() => {selectedInputData(inputData.code, inputData.name)}} 
                        onKeyDown={(e) => {selectedListEnter(e, inputData.code, inputData.name)}}
                        tabIndex={currentIndex === index ? "0" : "-1"}
                  >
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
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchInput;
