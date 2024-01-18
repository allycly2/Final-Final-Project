import React, { useState, useEffect } from "react";
import EventCalendar from "./EventCalendar";
import NavBar from "../NavBar/NavBar";
import "./Event.css";

const Event = () => {
  const [events, setEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleSearchSubmit();
  }, []); // Run once when the component mounts

  const handleSearchSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }
    setLoading(true);

    try {
      const from = "20240101";
      const to = "20241231";
      const category = selectedCategory || ""; // Use selectedCategory or empty string if undefined
      const url = `https://ogcef.one.gov.hk/event-api/eventList?category=${category}&from=${from}&to=${to}&lang=en`;

      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/${url}`
      );
      const data = await response.json();

      setEvents(data);
      setLoading(false);
    } catch (error) {
      console.log("Error:", error);
      setLoading(false);
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const parseExclusionDates = (exclusionDates) => {
    if (!exclusionDates) {
      return [];
    }

    return exclusionDates
      .split(",")
      .map((date) => date.replace("excl.", "").trim());
  };

  const isExcludedDate = (date, exclusionDates) => {
    const parsedExclusionDates = parseExclusionDates(exclusionDates);
    const formattedDate = date.format("DD/MM/YYYY");
    return parsedExclusionDates.includes(formattedDate);
  };

  const filteredEvents = events.filter((event) =>
    event.event_summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="event-container">
      <div className="navigation">
        <NavBar />
      </div>
      <div className="event-content-container">
        <div className="holiday-head">
          <div className="holiday-text">
            <h1 className="holiday-header">Event Calendar (2024)</h1>
            <h4 className="holiday-content">
              Discover upcoming events in Hong Kong.
            </h4>
          </div>
          <div className="holiday-img">
            <img
              className="holiday-img1"
              src="https://static.vecteezy.com/system/resources/previews/027/241/874/original/watercolor-birthday-balloon-green-yellow-red-colors-for-celebration-vibrant-and-bright-ai-generated-png.png"
            ></img>
          </div>
        </div>
        <div className="selector">
          <form onSubmit={handleSearchSubmit} className="search-form">
            <select
              className="select-holiday"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">All Categories</option>
              <option value="1">Festival & Carnival</option>
              <option value="2">Performance & Entertainment</option>
              <option value="3">Recreation & Sports</option>
              <option value="4">Library & Museum</option>
              <option value="5">Communal Activity</option>
              <option value="6">Exhibition & Visit</option>
              <option value="7">Seminar & Workshop</option>
              <option value="8">Others</option>
              <option value="10">Charitable Fund-raising</option>
            </select>
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
            <button type="submit" className="selector-btn">
              Search
            </button>
          </form>
        </div>
        {loading ? (
          <p>Loading events...</p>
        ) : filteredEvents.length > 0 ? (
          <React.Fragment>
            <EventCalendar events={filteredEvents} />
            {/*<ul>
              {filteredEvents.map((event) => (
                <li key={event.event_id}>
                  <h3>{event.event_summary}</h3>
                  <p>Date: {event.event_date}</p>
                  <p>Location: {event.event_location}</p>
                </li>
              ))}
              </ul>*/}
          </React.Fragment>
        ) : (
          <p>No events found.</p>
        )}
      </div>
    </div>
  );
};

export default Event;
