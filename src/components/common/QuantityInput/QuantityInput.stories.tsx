import React, { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { QuantityInput } from '@components';

export default {
  title: 'PCBuilder/QuantityInput',
  component: QuantityInput,
  decorators: [
    () => {
      const [count, setCount] = useState<number>(0);

      const increaseCount = (): void => {
        setCount((prevState) => prevState + 1);
      };

      const decreaseCount = (): void => {
        setCount((prevState) => prevState - 1);
      };

      return (
        <>
          <QuantityInput
            quantity={count}
            onClickDecrease={decreaseCount}
            onClickIncrease={increaseCount}
          />
        </>
      );
    },
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof QuantityInput>;

const Template: ComponentStory<typeof QuantityInput> = (args) => (
  <QuantityInput {...args} />
);

export const Sample = Template.bind({});
