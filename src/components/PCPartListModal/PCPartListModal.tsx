import React, { useMemo, useState } from 'react';
import { Icon, PCPart, PriceRangeInput } from '@components';
import { IPCPart } from '@interfaces';

type Props = {
  listPCPart: IPCPart[];
  onClickClose: () => void;
  handleSelect: (pcPartSelect: IPCPart) => void;
};

export const PCPartListModal = ({
  listPCPart,
  onClickClose,
  handleSelect,
}: Props): JSX.Element => {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);

  const handleMinChange = (minValue: number) => {
    setMinPrice(minValue);
  };

  const handleMaxChange = (maxValue: number) => {
    setMaxPrice(maxValue);
  };

  const listPCPartFiltered = useMemo(() => {
    return listPCPart.filter((pcPart) => {
      if (minPrice || maxPrice) {
        return pcPart.price >= minPrice && pcPart.price <= maxPrice;
      }
      return pcPart;
    });
  }, [minPrice, maxPrice]);

  return (
    <div className="modal show fade d-block part-pc-modal">
      <div className="modal-dialog modal-xl modal-dialog-scrollable">
        <div className="modal-content pc-modal-content shadow">
          <div className="modal-header">
            <h5 className="modal-title fs-2 fw-bolder text-light">PC Part</h5>
            <button
              onClick={onClickClose}
              type="button"
              className="btn btn-danger text-light rounded fs-5"
            >
              <Icon name="x" />
            </button>
          </div>
          <div className="modal-body">
            <div className="modal-dialog-scrollable d-flex gap-1 justify-content-between text-light ">
              <div className="mb-3 fs-5 fw-bold">
                <p className="form-label">Price range</p>
                <PriceRangeInput
                  minValue={minPrice}
                  maxValue={maxPrice}
                  onMinChange={handleMinChange}
                  onMaxChange={handleMaxChange}
                />
              </div>
              <div className="col-9 d-flex flex-column gap-3 part-pc-list">
                {listPCPartFiltered.map((pcPart) => (
                  <PCPart
                    isInCartPage={false}
                    pcPart={pcPart}
                    status={false}
                    key={pcPart.id}
                    handleSelectPCItem={handleSelect}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
