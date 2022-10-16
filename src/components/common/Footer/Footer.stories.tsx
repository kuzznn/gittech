import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer } from '@components';

export default {
  title: 'PCBuilder/Footer',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Sample = Template.bind({});
