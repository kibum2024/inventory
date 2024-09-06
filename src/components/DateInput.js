import React, { useState } from 'react';
import Calendar from './Calendar';
import YearSelector from './YearSelector ';


function DateInput() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);


  const [year, setYear] = useState(currentDate.getFullYear());
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleDayChange = (e) => {
    setDay(e.target.value);
  };

  const handleDateChange = (date) => {
    setYear(date.getFullYear());
    setMonth(date.getMonth() + 1);
    setDay(date.getDate());
  };

  return (
    <div>
      <YearSelector yearProps= {year} />
      <label>
        /
        <select value={month} onChange={handleMonthChange}>
          <option value="">월</option>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
            <option key={m} value={m}>
              {m < 10 ? `0${m}` : m}
            </option>
          ))}
        </select>
      </label>
      <label>
        /
        <input
          type="text"
          value={day}
          onChange={handleDayChange}
          maxLength="2"
        />
        <Calendar
          // selectedDate={new Date(year, month - 1, day)}
          // onDateChange={handleDateChange}
        />
      </label>
      <div>
        <h1>년도</h1>
        <YearSelector yearProps= {year} />

      </div>
    </div>
  );
}

export default DateInput;
