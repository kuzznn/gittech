import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PC_PART_TYPES, ROUTES } from '@enums';
import { Icon, PCPartListModal, PCPartSection } from '@components';
import { pcPartData } from '@constants';
import { IPCPart } from '@interfaces';
import { PCPartInCartContext, PCPartSelectedContext } from '@context';

type GROUPED_RESULT = {
  [key in PC_PART_TYPES]?: IPCPart[];
};

export const HomePage = (): JSX.Element => {
  const navigate = useNavigate();

  const { listPartSelected, setListPartSelected } = useContext(
    PCPartSelectedContext,
  );
  const { listPartInCart, setListPartInCart } = useContext(PCPartInCartContext);

  const [selectingPCPartType, setSelectingPCPartType] = useState<PC_PART_TYPES>(
    PC_PART_TYPES.CPU,
  );

  const [isModalPCPartTypeOpen, setIsModalPCPartTypeOpen] =
    useState<boolean>(false);

  const groupByTypePCPartType = () => {
    const groupedResult: GROUPED_RESULT = {};

    for (let index = 0; index < pcPartData.length; index++) {
      const pcPart: IPCPart = pcPartData[index];
      const type: PC_PART_TYPES = pcPart.type;

      if (!groupedResult[type]) {
        groupedResult[type] = [pcPart];
      } else {
        groupedResult[type]?.push(pcPart);
      }
    }

    return groupedResult;
  };

  const handleAddPCPartsToCart = () => {
    const listQuantityPartSelected = listPartSelected.map((item) => {
      const quantityPartSelected = listPartInCart.find(
        (quantity) => quantity.productId === item.id,
      );
      if (quantityPartSelected) {
        return {
          productId: item.id,
          quantity: quantityPartSelected.quantity,
        };
      }

      return {
        productId: item.id,
        quantity: 1,
      };
    });
    setListPartInCart(listQuantityPartSelected);

    navigate(ROUTES.CART);
  };

  const handleToggleModalShowPCParts = () => {
    setIsModalPCPartTypeOpen((isOpen) => !isOpen);
  };

  const handlePCPartSelected = (pcPartSelected: IPCPart) => {
    setListPartSelected((prev) => [...prev, pcPartSelected]);
    handleToggleModalShowPCParts();
  };

  const handleSetTypePCPartSelectingModal = (typeName: PC_PART_TYPES) => {
    handleToggleModalShowPCParts();
    setSelectingPCPartType(typeName);
  };

  const findPCPartByType = (typeName: PC_PART_TYPES) => {
    return listPartSelected.find((item) => item.type === typeName);
  };

  const handleResetPCPartSelected = () => {
    setListPartSelected([]);
  };

  const disabledButton = !listPartSelected.length ? true : false;

  return (
    <div className="container p-3">
      <button className="btn btn-primary" onClick={handleResetPCPartSelected}>
        <Icon name="arrow-clockwise me-1" />
        Reset
      </button>
      <div className="d-flex flex-column gap-4 mt-5">
        {Object.values(PC_PART_TYPES).map((typeName) => {
          const pcPartSelected = findPCPartByType(typeName);
          return (
            <PCPartSection
              pcPartSelected={pcPartSelected}
              key={typeName}
              typeName={typeName}
              onClickOpenModalPCPartSelected={() =>
                handleSetTypePCPartSelectingModal(typeName)
              }
            />
          );
        })}
      </div>
      <div className="me-3 mt-3 d-flex justify-content-end">
        <button
          className="btn btn-success"
          onClick={handleAddPCPartsToCart}
          disabled={disabledButton}
        >
          <Icon name="bag-check me-1" />
          Add to cart
        </button>
      </div>
      {isModalPCPartTypeOpen && (
        <PCPartListModal
          onClickClose={handleToggleModalShowPCParts}
          listPCPart={groupByTypePCPartType()[selectingPCPartType] || []}
          handleSelect={handlePCPartSelected}
        />
      )}
    </div>
  );
};
