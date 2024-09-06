import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
// import { ko } from "date-fns/esm/locale";
import ko from 'date-fns/locale/ko';
import 'react-datepicker/dist/react-datepicker.css';
import './CalendarButton.css'; // 필요에 따라 스타일을 적용할 수 있습니다.

function CalendarButton({ selectedDate, onDateChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDateChange = (date) => {
    onDateChange(date);
    setIsOpen(false);
  };

  return (
    <div className="calendar-button-container">
      <button type="button" onClick={handleButtonClick}>
        📅
      </button>
      {isOpen && (
        <DatePicker
          locale={ko}
          selected={selectedDate}
          onChange={handleDateChange}
        />
      )}
    </div>
  );
}

export default CalendarButton;
