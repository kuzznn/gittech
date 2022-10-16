import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from '@components';

export default {
  title: 'PCBuilder/Icon',
  component: Icon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Sample = Template.bind({});
Sample.args = {
  name: 'facebook fs-3',
};
