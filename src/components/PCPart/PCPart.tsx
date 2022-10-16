import React, { useContext } from 'react';
import { Icon, QuantityInput } from '@components';
import { ICartQuantity, IPCPart } from '@interfaces';
import { PCPartInCartContext } from '@context';

type Props = {
  pcPart: IPCPart;
  status: boolean;
  isInCartPage: boolean;
  handleSelectPCItem?: (pcPart: IPCPart) => void;
  handleRemovePCItem?: (pcPart: IPCPart) => void;
  handleIncrease?: (quantityData: ICartQuantity) => void;
  handleDecrease?: (quantityData: ICartQuantity) => void;
};

export const PCPart = ({
  pcPart,
  status,
  isInCartPage,
  handleSelectPCItem,
  handleRemovePCItem,
  handleIncrease,
  handleDecrease,
}: Props): JSX.Element => {
  const { listPartInCart } = useContext(PCPartInCartContext);

  const itemQuantity = listPartInCart.find(
    (item) => item.productId === pcPart.id,
  );

  const onClickSelectButton = (): void => {
    handleSelectPCItem && handleSelectPCItem(pcPart);
  };

  const onClickRemoveButton = (): void => {
    handleRemovePCItem && handleRemovePCItem(pcPart);
  };

  const handleIncreaseQuantityPCPart = () => {
    handleIncrease &&
      handleIncrease({
        productId: Number(pcPart.id),
        quantity: Number(itemQuantity?.quantity),
      });
  };

  const handleDecreaseQuantityPCPart = () => {
    handleDecrease &&
      handleDecrease({
        productId: Number(pcPart.id),
        quantity: Number(itemQuantity?.quantity),
      });
  };

  return (
    <div className="w-100 d-flex align-items-center gap-1 border border-2 pc-part">
      <div className="thumbnail">
        <img
          src={pcPart.thumbnail}
          alt="thumbnail"
          className="rounded-circle shadow-lg"
          width="100%"
          height="100%"
        />
      </div>
      <div className="p-3 w-100 d-flex justify-content-between text-light">
        <div className="d-flex flex-column">
          <h5 className="fw-bold w-75 text-decoration-underline">
            {pcPart.name}
          </h5>
          {isInCartPage && (
            <QuantityInput
              quantity={itemQuantity?.quantity || 0}
              onClickIncrease={handleIncreaseQuantityPCPart}
              onClickDecrease={handleDecreaseQuantityPCPart}
            />
          )}
        </div>
        <div className="d-flex justify-content-between flex-column">
          <p className="fw-bolder fs-3 text-wrap">
            {pcPart.price.toLocaleString('vi-VN', {
              style: 'currency',
              currency: 'VND',
            })}
          </p>
          {status ? (
            <button
              className="btn btn-sm btn-danger shadow ms-auto"
              onClick={onClickRemoveButton}
            >
              <Icon name="trash-fill" />
            </button>
          ) : (
            <button
              className="btn btn-sm btn-success shadow ms-auto"
              onClick={onClickSelectButton}
            >
              <Icon name="pin-angle-fill" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
