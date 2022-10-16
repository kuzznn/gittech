import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { HomePage } from '@pages';
import { Footer, Header } from '@components';

export default {
  title: 'PCBuilder/HomePage',
  decorators: [
    () => (
      <BrowserRouter>
        <Header />
        <HomePage />
        <Footer />
      </BrowserRouter>
    ),
  ],
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = () => <HomePage />;

export const Sample = Template.bind({});
