import React from 'react';
import { Meta, Story } from '@storybook/react';
import FlightBook from './FlightBook';

export default {
  title: 'Components/FlightBook',
  component: FlightBook,
} as Meta;

const Template: Story = (args) => <FlightBook {...args} />;

export const Default = Template.bind({});

export const WithFlights = Template.bind({});
WithFlights.args = {
  flights: [
    { from: 'London Gatwick', to: 'Barcelona', price: 24.99 },
    { from: 'London Gatwick', to: 'Amsterdam', price: 19.99 },
    { from: 'Barcelona', to: 'London Gatwick', price: 29.99 },
    { from: 'Amsterdam', to: 'London Gatwick', price: 14.99 },
  ],
};
