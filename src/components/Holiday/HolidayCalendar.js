import React, { useState } from "react";
import "./HolidayCalendar.css";

const HolidayCalendar = ({ holidays }) => {
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 0, 1));
  const [tooltipContent, setTooltipContent] = useState("");

  const handlePrevMonth = () => {
    setSelectedDate((prevDate) => {
      const prevMonth = prevDate.getMonth();
      const prevYear = prevDate.getFullYear();
      const newDate = new Date(prevYear, prevMonth - 1, 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setSelectedDate((prevDate) => {
      const nextMonth = prevDate.getMonth() + 2;
      const nextYear = prevDate.getFullYear();
      const newDate = new Date(nextYear, nextMonth - 1, 1);
      return newDate;
    });
  };

  const handleGoToToday = () => {
    setSelectedDate(new Date()); // Set selectedDate to the current date
  };

  const getMonthName = (date) => {
    const options = { month: "long", year: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  const handleMouseEnter = (holidayName) => {
    setTooltipContent(holidayName);
  };

  const handleMouseLeave = () => {
    setTooltipContent("");
  };

  const renderCalendar = () => {
    const firstDay = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1
    );
    const lastDay = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    );

    const daysInMonth = lastDay.getDate();
    const startDay = firstDay.getDay();
    const endDay = lastDay.getDay();

    const calendarCells = [];
    const startDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1
    );

    for (let i = 0; i < daysInMonth; i++) {
      const currentDate = startDate.getDate();
      const isCurrentDate =
        startDate.toDateString() === selectedDate.toDateString();

      const holiday = holidays.find((holiday) => {
        const holidayDate = new Date(holiday.date);
        return (
          holidayDate.getFullYear() === selectedDate.getFullYear() &&
          holidayDate.getMonth() === selectedDate.getMonth() &&
          holidayDate.getDate() === currentDate
        );
      });

      const calendarCell = (
        <td
          key={currentDate}
          className={`${isCurrentDate ? "selected" : ""} `}
          onMouseEnter={() => handleMouseEnter(holiday?.name)}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`date ${isCurrentDate ? "current-date" : ""}`}>
            {currentDate}
          </div>
          {holiday && (
            <div
              className="holiday-name"
              onMouseEnter={() => handleMouseEnter(holiday.name)}
              onMouseLeave={handleMouseLeave}
            >
              <span>{holiday.name}</span>
              {tooltipContent === holiday.name && (
                <div className="tooltip-content">{holiday.name}</div>
              )}
            </div>
          )}
        </td>
      );

      calendarCells.push(calendarCell);
      startDate.setDate(startDate.getDate() + 1);
    }

    const emptyCellsBefore = [...Array(startDay)].map((_, index) => (
      <td key={`empty-${index}`} className="empty"></td>
    ));
    const emptyCellsAfter = [...Array(6 - endDay)].map((_, index) => (
      <td key={`empty-${index}`} className="empty"></td>
    ));

    const allCells = [
      ...emptyCellsBefore,
      ...calendarCells,
      ...emptyCellsAfter,
    ];
    const calendarRows = [];

    while (allCells.length) {
      calendarRows.push(
        <tr key={Math.random()} className="week">
          {allCells.splice(0, 7)}
        </tr>
      );
    }

    return (
      <table className="calendar-table">
        <thead>
          <tr>
            <th className="weekend">Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>{calendarRows}</tbody>
      </table>
    );
  };

  return (
    <div className="page">
      <div className="calendar">
        <div className="header">
          <div className="month-header">
            <button
              className="header-btn"
              onClick={handlePrevMonth}
              style={{
                visibility:
                  selectedDate.getFullYear() === 2024 &&
                  selectedDate.getMonth() === 0
                    ? "hidden"
                    : "visible",
              }}
            >
              ‹
            </button>
            <span>{getMonthName(selectedDate)}</span>
            <button
              className="header-btn"
              onClick={handleNextMonth}
              style={{
                visibility:
                  selectedDate.getFullYear() === 2024 &&
                  selectedDate.getMonth() === 11
                    ? "hidden"
                    : "visible",
              }}
            >
              ›
            </button>
          </div>
          <button className="today-btn" onClick={handleGoToToday}>
            Today
          </button>
        </div>
        {renderCalendar()}
      </div>
    </div>
  );
};

export default HolidayCalendar;
