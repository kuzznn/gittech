import React, { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { PCPart } from '@components';
import { pcPartData } from '@constants';

export default {
  title: 'PCBuilder/PCPart',
  component: PCPart,
  decorators: [
    () => {
      const [status, setStatus] = useState<boolean>(false);

      const handleToggleButton = () => {
        setStatus((prevState) => !prevState);
      };

      return (
        <>
          {
            <PCPart
              status={status}
              pcPart={pcPartData[0]}
              isInCartPage={false}
              handleSelectPCItem={handleToggleButton}
              handleRemovePCItem={handleToggleButton}
            />
          }
        </>
      );
    },
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PCPart>;

const Template: ComponentStory<typeof PCPart> = (args) => <PCPart {...args} />;

export const Sample = Template.bind({});
