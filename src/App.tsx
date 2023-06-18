import React from "react";
import FlightSearch from "../src/components/FlightSearch/FlightSearch";
import FlightSelection, { Flight, FlightSelectionProps } from "./components/FlightSelection/FlightSelection";

const App: React.FC = () => {
  const flights: Flight[] = [
    {
      id: '1',
      departure: 'Paris',
      departureTime: '9:00',
      arrival: 'London',
      arrivalTime: '10:00',
      price: 100,
    },
    {
      id: '2',
      departure: 'Paris',
      departureTime: '15:00',
      arrival: 'London',
      arrivalTime: '16:00',
      price: 150,
    },
    {
      id: '3',
      departure: 'London',
      departureTime: '12:00',
      arrival: 'Paris',
      arrivalTime: '13:00',
      price: 120,
    },
    {
      id: '4',
      departure: 'London',
      departureTime: '18:00',
      arrival: 'Paris',
      arrivalTime: '19:00',
      price: 180,
    },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <FlightSearch />
      <FlightSelection flights={flights} />
    </div>
  );
};

export default App;
