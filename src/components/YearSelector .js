import React, { useState, useEffect, useRef } from 'react';

const YearInputOrSelect = ({yearProps}) => {
  const [selectedYear, setSelectedYear] = useState(yearProps); // 선택된 연도
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // 드롭다운 표시 여부
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const dropdownRef = useRef(null); 
  const inputRef = useRef(null); 
  const years = Array.from({ length: 141 }, (_, i) => selectedYear - 100 + i);
  years.sort((a, b) => b - a);

  // 입력 필드 변경 시 처리
  const handleInputChange = (e) => {
    setSelectedYear(e.target.value);
  };

  // 드롭다운에서 연도 선택 시 처리
  const handleSelectChange = (year) => {
    setSelectedYear(year);
    setIsDropdownVisible(false); // 선택 후 드롭다운 숨기기
  };

  // 입력 필드 클릭 시 드롭다운 표시
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
    updateDropdownPosition();
  };

  const updateDropdownPosition = () => {
    if (inputRef.current) {
      const inputRect = inputRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: inputRect.bottom + window.scrollY, // input 바로 아래
        left: inputRect.left + window.scrollX, // input의 왼쪽 정렬
      });
    }
  };

  useEffect(() => {
    if (dropdownRef.current) {
      const selectedYearIndex = years.indexOf(selectedYear);
      const itemHeight = 18; // 예상되는 li 요소의 높이 (px 단위로 조절 필요)
      dropdownRef.current.scrollTop = selectedYearIndex * itemHeight;
    }
  }, [years]);

  return (
    <div style={{ position: 'relative', display: 'flex' }}>
      <input
        ref={inputRef}
        type="text"
        value={selectedYear}
        onChange={handleInputChange}
        style={{  padding: '5px', 
                  width: '40px',                   
                  textAlign: 'center',
                  border: '1px solid #ccc', 
                  fontSize: '14px' }}
      />
      <div
        onClick={toggleDropdown}
        style={{ border: '1px solid #ccc', width: '18px', color: '#ccc', backgroundColor: '#fff' }}
      >▽</div>

      {/* 드롭다운 메뉴 */}
      {isDropdownVisible && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.0)',
            zIndex: 1000
          }}
        >
          <ul
            style={{
              position: 'absolute',
              top: `${dropdownPosition.top}px`, 
              left: `${dropdownPosition.left}px`,
              width: '70px',
              maxHeight: '185px',
              overflowY: 'scroll',
              border: '1px solid #ccc',
              backgroundColor: 'white',
              zIndex: 1,
              padding: 0,
              listStyle: 'none',
              margin: 0
            }}
            ref={dropdownRef}
          >
            {years.map((year) => (
              <li
                key={year}
                onClick={() => handleSelectChange(year)}
                style={{
                  fontSize: '14px', 
                  textAlign: 'center',
                  height: '18px',
                  cursor: 'pointer',
                  backgroundColor: selectedYear === year ? '#e6f7ff' : 'white'
                }}
              >
                {year}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default YearInputOrSelect;
