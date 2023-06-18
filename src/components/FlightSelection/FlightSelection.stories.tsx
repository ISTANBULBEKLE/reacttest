import React from 'react';
import { Story, Meta } from '@storybook/react';
import FlightSelection, { Flight, FlightSelectionProps } from './FlightSelection';

export default { title: 'Components/FlightSelection', component: FlightSelection, } as Meta;

const Template: Story = (args) => <FlightSelection flights={[]} {...args} />;

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
        price: 180, },];

export const Default = Template.bind({});
Default.args = { flights, };