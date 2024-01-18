import React from "react";

const HolidaySelector = ({ countries, selectedCountry, onCountryChange }) => {
  return (
    <div className="Holiday-selector">
      <select
        className="select-holiday"
        value={selectedCountry}
        onChange={onCountryChange}
      >
        <option value="" disabled hidden>
          Select a Country
        </option>
        {countries.map((country) => (
          <option
            key={country.code}
            value={country.code}
            className="select-holiday__option"
          >
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default HolidaySelector;
