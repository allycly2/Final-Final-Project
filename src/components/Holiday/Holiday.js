import React, { useState } from "react";
import HolidaySelector from "./HolidaySelector";
import HolidayList from "./HolidayList";
import HolidayCalendar from "./HolidayCalendar";
import axios from "axios";
import "./Holiday.css";
import Sidebar from "../NavBar/Sidebar";
import backgroundImage from "../Image/bkimage4.png";

const HolidayTest = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [holidays, setHolidays] = useState([]);
  const [showReminder, setShowReminder] = useState(false);

  const countries = [
    { code: "AF", name: "Afghanistan" },
    { code: "AR", name: "Argentina" },
    { code: "AT", name: "Austria" },
    { code: "AU", name: "Australia" },
    { code: "BR", name: "Brazil" },
    { code: "CA", name: "Canada" },
    { code: "CH", name: "Switzerland" },
    { code: "CL", name: "Chile" },
    { code: "CN", name: "China" },
    { code: "DE", name: "Germany" },
    { code: "DK", name: "Denmark" },
    { code: "ES", name: "Spain" },
    { code: "FI", name: "Finland" },
    { code: "FR", name: "France" },
    { code: "GB", name: "United Kingdom" },
    { code: "GR", name: "Greece" },
    { code: "HK", name: "Hong Kong" },
    { code: "ID", name: "Indonesia" },
    { code: "IN", name: "India" },
    { code: "IT", name: "Italy" },
    { code: "JP", name: "Japan" },
    { code: "KH", name: "Cambodia" },
    { code: "KP", name: "North Korea" },
    { code: "KR", name: "South Korea" },
    { code: "MO", name: "Macao" },
    { code: "PH", name: "Philippines" },
    { code: "SG", name: "Singapore" },
    { code: "TW", name: "Taiwan" },
    { code: "US", name: "United States" },
    { code: "ZA", name: "South Africa" },
    // Add more countries as needed
  ];

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setShowReminder(false); // Clear the reminder message when a country is selected
  };

  const handleSubmit = () => {
    if (selectedCountry) {
      const apiUrl = "https://api.api-ninjas.com/v1/holidays";
      const year = "2024";

      const config = {
        headers: {
          "X-Api-Key": "B+bXLv9UKTMBpuCPO/3jFg==TGiuFJL4EGAiVnCN",
          "Content-Type": "application/json",
        },
        params: {
          country: selectedCountry,
          year: year,
        },
      };

      axios
        .get(apiUrl, config)
        .then((response) => {
          const fetchedHolidays = response.data;
          setHolidays(fetchedHolidays);
        })
        .catch((error) => {
          console.error("Error fetching holidays:", error);
        });
    } else {
      setShowReminder(true);
      setHolidays([]);
    }
  };

  const styles = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className="holiday-container" style={styles}>
      <div className="navigation">
        <Sidebar />
      </div>

      <div className="holiday-selector-container">
        <div className="holiday-head">
          <div className="holiday-text">
            <h1 className="holiday-header">Holidays Worldwide (2024)</h1>
            <h4 className="holiday-content">
              Discover holidays from around the world.
            </h4>
          </div>
        </div>

        <div className="selector">
          <h3 className="holiday-list-title">Holidays and Observances:</h3>

          <div>
            <HolidaySelector
              countries={countries}
              selectedCountry={selectedCountry}
              onCountryChange={handleCountryChange}
            />
          </div>
          <button className="selector-btn" onClick={handleSubmit}>
            Search
          </button>
          {showReminder && (
            <div className="selector-msg">Please select a country.</div>
          )}
        </div>

        <div className="holiday-calendar">
          <HolidayCalendar holidays={holidays} />
        </div>
        <div className="holidayList">
          {holidays.length > 0 && (
            <div className="holiday-list">
              <HolidayList holidays={holidays} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HolidayTest;
