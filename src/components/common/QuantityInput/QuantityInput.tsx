import React from 'react';
import { Icon } from '@components';

type Props = {
  quantity: number;
  onClickIncrease?: () => void;
  onClickDecrease?: () => void;
};

export const QuantityInput = ({
  quantity,
  onClickIncrease,
  onClickDecrease,
}: Props): JSX.Element => {
  return (
    <div
      className={`d-flex input-group-md quantity-input bg-secondary text-light shadow rounded-pill overflow-hidden`}
    >
      <button className="btn text-light" onClick={onClickDecrease}>
        <Icon name="dash" />
      </button>
      <div className="d-flex align-items-center fw-bold w-100 justify-content-center">
        {quantity}
      </div>
      <button className="btn text-light" onClick={onClickIncrease}>
        <Icon name="plus" />
      </button>
    </div>
  );
};
