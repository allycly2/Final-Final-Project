import React, { useState } from "react";

const EventCalendar = ({ events }) => {
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

  const getMonthName = (date) => {
    const options = { month: "long", year: "numeric" };
    return date.toLocaleDateString(undefined, options);
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

      const eventsOnCurrentDate = events.filter((event) => {
        const eventDate = new Date(event.event_date);

        return (
          eventDate.getFullYear() === startDate.getFullYear() &&
          eventDate.getMonth() === startDate.getMonth() &&
          eventDate.getDate() === currentDate
        );
      });

      const calendarCell = (
        <td key={currentDate} className={`${isCurrentDate ? "selected" : ""} `}>
          <div className={`date ${isCurrentDate ? "current-date" : ""}`}>
            {currentDate}
          </div>
          {eventsOnCurrentDate.length > 0 && (
            <div className="event-summary">
              {eventsOnCurrentDate.map((event) => (
                <div className="event-summary-item" key={event.event_id}>
                  <p>{event.event_summary}</p>
                  <p>{event.event_date}</p>
                  <p>Location: {event.event_location}</p>
                </div>
              ))}
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
        {renderCalendar()}
      </div>
    </div>
  );
};

export default EventCalendar;
