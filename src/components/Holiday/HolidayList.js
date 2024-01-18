const HolidayList = ({ holidays }) => {
  const sortedHolidays = holidays.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="holiday-list-container">
      {sortedHolidays.map((holiday) => {
        const date = new Date(holiday.date);
        const formattedDate = date.toLocaleDateString("en-US", {
          day: "2-digit",
          month: "short",
        });

        return (
          <div className="holiday-list-item" key={holiday.id}>
            <p className="holiday-list-date">{formattedDate}</p>
            <p className="holiday-list-name">{holiday.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HolidayList;
