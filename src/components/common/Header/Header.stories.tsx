import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from '@components';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'PCBuilder/Header',
  component: Header,
  decorators: [
    () => (
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    ),
  ],
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Sample = Template.bind({});
Sample.args = {
  cartItemCount: 100,
};
