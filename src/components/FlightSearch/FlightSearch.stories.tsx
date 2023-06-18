import React from 'react';
import { Story, Meta } from '@storybook/react';
import FlightSearch from './FlightSearch';
import { JSX } from 'react/jsx-runtime';

export default {
  title: 'Components/FlightSearch',
  component: FlightSearch,
} as Meta;

const Template: Story<FlightSearchProps> = (args: JSX.IntrinsicAttributes) => <FlightSearch {...args} />;

export const Default = Template.bind({});

export const WithCustomDatesAndAirports = Template.bind({});
WithCustomDatesAndAirports.args = {
  startDate: new Date('2023-06-20'),
  endDate: new Date('2023-06-30'),
  departingAirport: 'JFK',
  returningAirport: 'LAX',
};



