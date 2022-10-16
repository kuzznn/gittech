import React from 'react';
import { Icon } from '@components';

type Props = {
  minValue: number;
  maxValue: number;
  onMinChange: (min: number) => void;
  onMaxChange: (max: number) => void;
};

export const PriceRangeInput = ({
  minValue,
  maxValue,
  onMinChange,
  onMaxChange,
}: Props): JSX.Element => {
  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onMinChange(Number(event.target.value));
  };
  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onMaxChange(Number(event.target.value));
  };

  return (
    <div className="d-flex align-items-center flex-column price-range">
      <input
        type="number"
        name="min"
        className="form-control text-center"
        placeholder="100.000&#8363;"
        value={minValue}
        onChange={handleMinChange}
      />
      <Icon name="soundwave text-light fs-3" />
      <input
        type="number"
        name="max"
        className="form-control text-center"
        placeholder="10.000.000&#8363;"
        value={maxValue}
        onChange={handleMaxChange}
      />
    </div>
  );
};
