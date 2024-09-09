import React, { useState, useEffect, useRef } from 'react';
import Calendar from './Calendar';
import calendarImg from '../images/calendar.jpg';

const KbInputDate = ({dateProp}) => {
  const [selectedYear, setSelectedYear] = useState(dateProp.getFullYear()); 
  const [selectedMonth, setSelectedMonth] = useState(String(dateProp.getMonth() + 1).padStart(2, '0')); 
  const [selectedDate, setSelectedDate] = useState(String(dateProp.getDate()).padStart(2, '0')); 
  const [isYearDropdownVisible, setIsYearDropdownVisible] = useState(false); 
  const [isMonthDropdownVisible, setIsMonthDropdownVisible] = useState(false); 
  const [dropdownYearPosition, setDropdownYearPosition] = useState({ top: 0, left: 0 });
  const [dropdownMonthPosition, setDropdownMonthPosition] = useState({ top: 0, left: 0 });
  const [calendarPosition, setCalendarPosition] = useState({ top: 0, left: 0 });
  const [isCalendarOpen, setIsCallendarOpen] = useState(false);
  const dropdownYearRef = useRef(null); 
  const dropdownMonthRef = useRef(null); 
  const inputYearRef = useRef(null); 
  const inputMonthRef = useRef(null); 
  const CalendarRef = useRef(null); 
  const years = Array.from({ length: 141 }, (_, i) => selectedYear - 100 + i);
        years.sort((a, b) => b - a);
  const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

  // 입력 필드 변경 시 처리
  const handleInputYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  // 드롭다운에서 연도 선택 시 처리
  const handleSelectYearChange = (year) => {
    setSelectedYear(year);
    setIsYearDropdownVisible(false); // 선택 후 드롭다운 숨기기
  };

  // 입력 필드 클릭 시 드롭다운 표시
  const toggleYearDropdown = () => {
    setIsYearDropdownVisible(!isYearDropdownVisible);
    updateDropdownYearPosition();
  };

  const updateDropdownYearPosition = () => {
    if (inputYearRef.current) {
      const inputRect = inputYearRef.current.getBoundingClientRect();
      setDropdownYearPosition({
        top: inputRect.bottom + window.scrollY, // input 바로 아래
        left: inputRect.left + window.scrollX, // input의 왼쪽 정렬
      });
    }
  };

  useEffect(() => {
    if (dropdownYearRef.current) {
      const selectedYearIndex = years.indexOf(selectedYear);
      const itemHeight = 18; // 예상되는 li 요소의 높이 (px 단위로 조절 필요)
      dropdownYearRef.current.scrollTop = selectedYearIndex * itemHeight;
    }
  }, [years]);

  // 여기서 부터 월 입력 필드 변경 시 처리
  const handleInputMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  // 드롭다운에서 연도 선택 시 처리
  const handleSelectMonthChange = (month) => {
    setSelectedMonth(month);
    setIsMonthDropdownVisible(false); // 선택 후 드롭다운 숨기기
  };

  // 입력 필드 클릭 시 드롭다운 표시
  const toggleMonthDropdown = () => {
    setIsMonthDropdownVisible(!isYearDropdownVisible);
    updateDropdownMonthPosition();
  };

  const updateDropdownMonthPosition = () => {
    if (inputMonthRef.current) {
      const inputRect = inputMonthRef.current.getBoundingClientRect();
      setDropdownMonthPosition({
        top: inputRect.bottom + window.scrollY, // input 바로 아래
        left: inputRect.left + window.scrollX, // input의 왼쪽 정렬
      });
    }
  };

  useEffect(() => {
    if (dropdownMonthRef.current) {
      const selectedMonthIndex = years.indexOf(selectedMonth);
      const itemHeight = 18; // 예상되는 li 요소의 높이 (px 단위로 조절 필요)
      dropdownMonthRef.current.scrollTop = selectedMonthIndex * itemHeight;
    }
  }, [months]);

  const handleInputDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleCalendarClick = () => {
    setIsCallendarOpen(!isCalendarOpen);
    updateCalendarPosition();
  };

  const updateCalendarPosition = () => {
    if (CalendarRef.current) {
      const inputRect = CalendarRef.current.getBoundingClientRect();
      setCalendarPosition({
        top: inputRect.bottom + window.scrollY + 5, // input 바로 아래
        left: inputRect.left + window.scrollX - 182 // input의 왼쪽 정렬
      });
    }
  };

  const handleDateSelect = (date) => {
    setSelectedYear(date.getFullYear());
    setSelectedMonth(String(date.getMonth() + 1).padStart(2, '0'));
    setSelectedDate(String(date.getDate()).padStart(2, '0')); 
    setIsCallendarOpen(!isCalendarOpen);
    console.log("선택된 날짜:", date); // 선택된 날짜 콘솔 출력
  };

  return (
    <div style={{ position: 'relative', display: 'flex', width: '200px' }}>
      <input
        ref={inputYearRef}
        type="text"
        value={selectedYear}
        onChange={handleInputYearChange}
        style={{  padding: '5px', 
                  width: '40px',                   
                  textAlign: 'center',
                  border: '1px solid #ccc', 
                  fontSize: '14px' }}
      />
      <div
        onClick={toggleYearDropdown}
        style={{ border: '1px solid #ccc', width: '18px', color: '#ccc', backgroundColor: '#fff' }}
      >▽</div>
      <div>&nbsp;/&nbsp;</div>
      <input
        ref={inputMonthRef}
        type="text"
        value={selectedMonth}
        onChange={handleInputMonthChange}
        style={{  padding: '5px', 
                  width: '20px',                   
                  textAlign: 'center',
                  border: '1px solid #ccc', 
                  fontSize: '14px' }}
      />
      <div
        onClick={toggleMonthDropdown}
        style={{ border: '1px solid #ccc', width: '18px', color: '#ccc', backgroundColor: '#fff' }}
      >▽</div>
      <div>&nbsp;/&nbsp;</div>
      <input
        type="text"
        value={selectedDate}
        onChange={handleInputDateChange}
        style={{  padding: '5px', 
                  width: '20px',                   
                  textAlign: 'center',
                  border: '1px solid #ccc', 
                  fontSize: '14px' }}
      />
      <button type="button"
              ref={CalendarRef}
              style={{ width: '28px', height: '28px', border: 'none', padding: '0px'}}
              onClick={handleCalendarClick}>
        <img  src={calendarImg} 
              style={{ width: '28px', height: '28px', border: 'none', padding: '0px', cursor: 'pointer'}}
              alt="" />
      </button>

      {isCalendarOpen && (
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
          <div 
            style={{
              position: 'absolute',
              top: `${calendarPosition.top}px`, 
              left: `${calendarPosition.left}px`,
            }}
          >
            <Calendar onDateDoubleClick={handleDateSelect} />
          </div>
        </div>
      )}

      {/* 년도 드롭다운 메뉴 */}
      {isYearDropdownVisible && (
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
              top: `${dropdownYearPosition.top}px`, 
              left: `${dropdownYearPosition.left}px`,
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
            ref={dropdownYearRef}
          >
            {years.map((year) => (
              <li
                key={year}
                onClick={() => handleSelectYearChange(year)}
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

      {/* 월 드롭다운 메뉴 */}
      {isMonthDropdownVisible && (
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
              top: `${dropdownMonthPosition.top}px`, 
              left: `${dropdownMonthPosition.left}px`,
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
            ref={dropdownMonthRef}
          >
            {months.map((month) => (
              <li
                key={month}
                onClick={() => handleSelectMonthChange(month)}
                style={{
                  fontSize: '14px', 
                  textAlign: 'center',
                  height: '18px',
                  cursor: 'pointer',
                  backgroundColor: selectedMonth === month ? '#e6f7ff' : 'white'
                }}
              >
                {month}
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
};

export default KbInputDate;
