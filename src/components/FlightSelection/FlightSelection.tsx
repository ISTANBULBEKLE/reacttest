import React, { useState } from 'react';
import './FlightSelection.css';

export interface Flight {
  id: string;
  departure: string;
  departureTime: string;
  arrival: string;
  arrivalTime: string;
  price: number;
}

export interface FlightSelectionProps {
  flights: Flight[];
}

const FlightSelection: React.FC<FlightSelectionProps> = ({ flights }) => {
  const [outboundSelected, setOutboundSelected] = useState<string | null>(null);
  const [inboundSelected, setInboundSelected] = useState<string | null>(null);

  const handleOutboundSelect = (id: string) => {
    if (outboundSelected === id) {
      setOutboundSelected(null);
    } else {
      setOutboundSelected(id);
    }
  };

  const handleInboundSelect = (id: string) => {
    if (inboundSelected === id) {
      setInboundSelected(null);
    } else {
      setInboundSelected(id);
    }
  };

  const renderFlight = (flight: Flight, onSelect: (id: string) => void, selected: boolean) => {
    const flightClass = `flight-selection__flight${selected ? ' flight-selection__flight--selected' : ''}`;
    return (
      <div key={flight.id} className={flightClass} onClick={() => onSelect(flight.id)}>
        <div className="flight-selection__flight-info">
          <div>{flight.departure}</div>
          <div>{flight.departureTime}</div>
          <div>{flight.arrival}</div>
          <div>{flight.arrivalTime}</div>
        </div>
        <div className="flight-selection__flight-price">
          <div className="flight-selection__flight-price-amount">{flight.price}€</div>
          <button className="flight-selection__flight-select">Select</button>
        </div>
      </div>
    );
  };

  return (
    <div className="flight-selection">
      <div className="flight-selection__outbound">
        <h2 className="flight-selection__title">Outbound</h2>
        <div className="flight-selection__flight-list">
        {flights.map((flight) => renderFlight(flight, handleOutboundSelect, !!outboundSelected && flight.id === outboundSelected))}
        </div>
      </div>
      <div className="flight-selection__inbound">
        <h2 className="flight-selection__title">Inbound</h2>
        <div className="flight-selection__flight-list">
          {flights.map((flight) => renderFlight(flight, handleInboundSelect, !!inboundSelected && flight.id === inboundSelected))}
        </div>
      </div>
    </div>
  );
};

export default FlightSelection;

