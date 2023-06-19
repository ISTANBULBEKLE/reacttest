import React from 'react';
import { Story, Meta } from '@storybook/react';
import { FlightSearchProps } from './FlightSearch';
import FlightSearch from './FlightSearch';
import { Flight } from '../FlightSelection/FlightSelection';

export default {
  title: 'Components/FlightSearch',
  component: FlightSearch,
} as Meta;

interface FlightSearchWithExtraProps extends FlightSearchProps {
  startDate: Date;
  endDate: Date;
  departingAirport: string;
  returningAirport: string;
}

const Template: Story<FlightSearchWithExtraProps> = (args: FlightSearchWithExtraProps) => (
  <FlightSearch
    startDate={args.startDate}
    endDate={args.endDate}
    departingAirport={args.departingAirport}
    returningAirport={args.returningAirport}
    onSearch={(searchParams: any) => {}}
  />
);

export const Default = Template.bind({});

export const WithCustomDatesAndAirports = Template.bind({});
WithCustomDatesAndAirports.args = {
  startDate: new Date('2023-06-20'),
  endDate: new Date('2023-06-30'),
  departingAirport: 'JFK',
  returningAirport: 'LAX',
};


