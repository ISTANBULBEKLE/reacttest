import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './FlightBook.css';

interface Flight {
    from: string;
    to: string;
    price: number;
}

const flights: Flight[] = [
    { from: 'London Gatwick', to: 'Barcelona', price: 24.99 },
    { from: 'London Gatwick', to: 'Amsterdam', price: 19.99 },
    { from: 'Barcelona', to: 'London Gatwick', price: 29.99 },
    { from: 'Amsterdam', to: 'London Gatwick', price: 14.99 },
];

const FlightBook: React.FC = (): JSX.Element => {
    const [outboundAirport, setOutboundAirport] = useState<string>('');
    const [inboundAirport, setInboundAirport] = useState<string>('');
    const [outboundDate, setOutboundDate] = useState<Date | null>(null);
    const [inboundDate, setInboundDate] = useState<Date | null>(null);

    const handleSearch = (): void => {
        console.log('Outbound Airport:', outboundAirport);
        console.log('Inbound Airport:', inboundAirport);
        console.log('Outbound Date:', outboundDate);
        console.log('Inbound Date:', inboundDate);
    };

    return (
        <div className="flight-book-container">
            <div className="flight-book-header">
                <h1>Find your perfect flight</h1>
            </div>
            <div className="flight-book-datepicker">
                <div className="flight-book-datepicker__label">Outbound</div>
                <div className="flight-book-datepicker__label">Inbound</div>
                <div className="flight-book-datepicker__input">
                    <input
                        type="text"
                        placeholder="Select airport"
                        value={outboundAirport}
                        onChange={(e) => setOutboundAirport(e.target.value)}
                        className="flight-book-datepicker__airport-input"
                    />
                    <input
                        type="text"
                        placeholder="Select airport for return"
                        value={inboundAirport}
                        onChange={(e) => setInboundAirport(e.target.value)}
                        className="flight-book-datepicker__airport-input"
                    />
                </div>
                <div className="flight-book-datepicker__input">
                    <DatePicker
                        selected={outboundDate}
                        onChange={(date: Date | null) => setOutboundDate(date)}
                        className="flight-book-datepicker__datepicker"
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select date"
                    />
                    <DatePicker
                        selected={inboundDate}
                        onChange={(date: Date | null) => setInboundDate(date)}
                        className="flight-book-datepicker__datepicker"
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select date"
                    />
                </div>
                <div className="flight-book-datepicker__button" onClick={handleSearch}>
                    Search
                </div>
            </div>
            <div className="flight-book-cards">
                {flights.map((flight, index) => (
                    <div key={index} className="flight-book-card">
                        <div className="flight-book-card__header">
                            <h2>
                                {flight.from} to {flight.to}
                            </h2>
                            <div className="flight-book-price-tag">£{flight.price}</div>
                        </div>
                        <div className="flight-book-card__body">
                            <div className="flight-book-card__times">
                                <div className="flight-book-card__time">
                                    <span>06:00</span>
                                    <div className="flight-book-card__plus-icon">+</div>
                                </div>
                                <div className="flight-book-card__time">
                                    <span>12:00</span>
                                    <div className="flight-book-card__plus-icon">+</div>
                                </div>
                                <div className="flight-book-card__time">
                                    <span>18:00</span>
                                    <div className="flight-book-card__plus-icon">+</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default FlightBook;
