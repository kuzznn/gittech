import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { PC_PART_TYPES } from '@enums';
import { PCPartSection } from '@components';
import { IPCPart } from '@interfaces';
import { pcPartData } from '@constants';

export default {
  title: 'PCBuilder/PCPartSection',
  component: PCPartSection,
  decorators: [
    () => {
      return (
        <div className="d-flex flex-column gap-4 mt-5">
          {Object.values(PC_PART_TYPES).map((typeName, index) => {
            const pcPart: IPCPart | undefined = pcPartData.find(
              (value) => value.type === typeName,
            );
            return (
              <PCPartSection
                key={index}
                typeName={typeName}
                pcPartSelected={pcPart}
                onClickOpenModalPCPartSelected={() => null}
              />
            );
          })}
        </div>
      );
    },
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PCPartSection>;

const Template: ComponentStory<typeof PCPartSection> = (args) => (
  <PCPartSection {...args} />
);

export const Sample = Template.bind({});
