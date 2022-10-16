import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { PCPartListModal } from '@components';
import { filterPCPartByType } from '@helpers';
import { PC_PART_TYPES } from '@enums';
import { pcPartData } from '@constants';

export default {
  title: 'PCBuilder/PCPartListModal',
  component: PCPartListModal,
} as ComponentMeta<typeof PCPartListModal>;

const Template: ComponentStory<typeof PCPartListModal> = (args) => (
  <PCPartListModal {...args} />
);

export const Sample = Template.bind({});
Sample.args = {
  listPCPart: filterPCPartByType(pcPartData, PC_PART_TYPES.CASE),
};
