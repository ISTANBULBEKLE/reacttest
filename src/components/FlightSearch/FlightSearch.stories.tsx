import React from 'react';
import { Story, Meta } from '@storybook/react';
import FlightSearch from './FlightSearch';

export default {
  title: 'Components/FlightSearch',
  component: FlightSearch,
} as Meta;

const Template: Story = (args) => <FlightSearch {...args} />;


export const Default = Template.bind({});

export const WithCustomDates = Template.bind({});
WithCustomDates.args = {
  startDate: new Date('2023-06-20'),
  endDate: new Date('2023-06-30'),
};



