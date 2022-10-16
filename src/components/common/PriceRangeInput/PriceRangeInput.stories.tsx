import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { PriceRangeInput } from '@components';

export default {
  title: 'PCBuilder/PriceRangeInput',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PriceRangeInput>;

const Template: ComponentStory<typeof PriceRangeInput> = (args) => (
  <PriceRangeInput {...args} />
);

export const Sample = Template.bind({});
