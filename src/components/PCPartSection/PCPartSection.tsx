import React, { useContext } from 'react';
import { IPCPart } from '@interfaces/PCPart';
import { Icon, PCPart } from '@components';
import { PC_PART_TYPES } from '@enums';
import { PCPartInCartContext, PCPartSelectedContext } from '@context';
import { removePCPartInCart, removePCPartSelected } from '@helpers';

type Props = {
  typeName: PC_PART_TYPES;
  pcPartSelected?: IPCPart;
  onClickOpenModalPCPartSelected: (typeName: PC_PART_TYPES) => void;
};

export const PCPartSection = ({
  typeName,
  pcPartSelected,
  onClickOpenModalPCPartSelected,
}: Props): JSX.Element => {
  const { listPartSelected, setListPartSelected } = useContext(
    PCPartSelectedContext,
  );

  const { setListPartInCart, listPartInCart } = useContext(PCPartInCartContext);

  const onClickOpenModalShowPCParts = () => {
    onClickOpenModalPCPartSelected(typeName);
  };

  const handleRemovePCPartSelected = (pcPartSelected: IPCPart) => {
    removePCPartSelected(setListPartSelected, listPartSelected, pcPartSelected);
    removePCPartInCart(setListPartInCart, listPartInCart, pcPartSelected);
  };

  const className = pcPartSelected ? '' : 'd-flex justify-content-between pe-3';

  return (
    <div className={className}>
      <h2 className="fs-5 text-light">{typeName}</h2>
      {pcPartSelected && pcPartSelected.type === typeName ? (
        <div className="d-flex flex-column">
          <PCPart
            isInCartPage={false}
            status={true}
            pcPart={pcPartSelected}
            handleRemovePCItem={handleRemovePCPartSelected}
          />
        </div>
      ) : (
        <button
          className="btn btn-sm btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          onClick={onClickOpenModalShowPCParts}
        >
          <Icon name="box-arrow-up-right"></Icon>
        </button>
      )}
    </div>
  );
};
