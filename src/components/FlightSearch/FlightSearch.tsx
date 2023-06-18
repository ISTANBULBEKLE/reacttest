import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './FlightSearch.css';

/**
 * Flight search component
 * @returns A React functional component
 */
const FlightSearch: React.FC = (): JSX.Element => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [departingAirport, setDepartingAirport] = useState<string>('');
  const [returningAirport, setReturningAirport] = useState<string>('');

  /**
   * Handle search button click event
   * @returns void
   */
  const handleSearch = (): void => {
    console.log('Departing Airport:', departingAirport);
    console.log('Returning Airport:', returningAirport);
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
  };

  return (
    <div className="flight-search-card">
      <h1 className="flight-search__title">Flights Search</h1>
      <div className="flight-search__form">
        <div className="flight-search__input">
          <label htmlFor="departing-airport">Departing Airport</label>
          <input
            id="departing-airport"
            value={departingAirport}
            onChange={(e) => setDepartingAirport(e.target.value)}
            className="flight-search__airport-input"
            placeholder="Enter departing airport"
          />
        </div>
        <div className="flight-search__input">
          <label htmlFor="returning-airport">Returning Airport</label>
          <input
            id="returning-airport"
            value={returningAirport}
            onChange={(e) => setReturningAirport(e.target.value)}
            className="flight-search__airport-input"
            placeholder="Enter returning airport"
          />
        </div>
        <div className="flight-search__input">
          <label htmlFor="start-date">Departure Date</label>
          <DatePicker
            id="start-date"
            selected={startDate}
            onChange={(date: Date | null) => setStartDate(date)}
            className="flight-search__datepicker"
            dateFormat="dd/MM/yyyy"
            placeholderText="Select departure date"
          />
        </div>
        <div className="flight-search__input">
          <label htmlFor="end-date">Return Date</label>
          <DatePicker
            id="end-date"
            selected={endDate}
            onChange={(date: Date | null) => setEndDate(date)}
            className="flight-search__datepicker"
            dateFormat="dd/MM/yyyy"
            placeholderText="Select return date"
          />
        </div>
        <button className="flight-search__button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default FlightSearch;