import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ICartQuantity, IPCPart } from '@interfaces';
import { ROUTES } from '@enums';
import { Icon, PCPart } from '@components';
import { PCPartInCartContext, PCPartSelectedContext } from '@context';
import {
  calculateTotalPrice,
  removePCPartInCart,
  removePCPartSelected,
} from '@helpers';
import { Button } from 'react-bootstrap';

export const CartPage = (): JSX.Element => {
  const { listPartSelected, setListPartSelected } = useContext(
    PCPartSelectedContext,
  );
  const { listPartInCart, setListPartInCart } = useContext(PCPartInCartContext);

  const handleRemovePCPartSelected = (pcPartSelected: IPCPart) => {
    removePCPartSelected(setListPartSelected, listPartSelected, pcPartSelected);
    removePCPartInCart(setListPartInCart, listPartInCart, pcPartSelected);
  };

  const handleIncreaseQuantityPCPart = (pcPartSelected: ICartQuantity) => {
    setListPartInCart((prevList: ICartQuantity[]) => {
      return prevList.map((pcPart) => {
        if (pcPart.productId === Number(pcPartSelected.productId)) {
          return {
            productId: pcPart.productId,
            quantity: pcPart.quantity++,
          };
        }

        return pcPart;
      });
    });
  };

  const handleDecreaseQuantityPCPart = (pcPartSelected: ICartQuantity) => {
    setListPartInCart((prevList: ICartQuantity[]) => {
      return prevList.map((pcPart) => {
        if (pcPart.productId === pcPartSelected.productId) {
          return {
            productId: pcPart.productId,
            quantity: pcPart.quantity === 1 ? 1 : pcPart.quantity--,
          };
        }

        return pcPart;
      });
    });
  };

  const totalPrice = useMemo(() => {
    return calculateTotalPrice({ listPartSelected, listPartInCart });
  }, [listPartSelected, listPartInCart]);

  return (
    <div className="d-flex flex-column container">
      <div className="mb-5 mt-2">
        <Link to={ROUTES.BUILDER} className="text-light">
          <Icon name="chevron-left" />
          Back to PC Builder Page
        </Link>
      </div>
      <div className="d-flex flex-column gap-2 mb-3">
        {listPartSelected.map((pcPartSelected) => (
          <PCPart
            key={pcPartSelected.id}
            pcPart={pcPartSelected}
            status={true}
            isInCartPage={true}
            handleRemovePCItem={handleRemovePCPartSelected}
            handleIncrease={handleIncreaseQuantityPCPart}
            handleDecrease={handleDecreaseQuantityPCPart}
          />
        ))}
      </div>
      <Button> Pay</Button>
      <div className="d-flex flex-column text-light ms-auto fs-3 fw-bold">
        Total: {totalPrice}
      </div>
    </div>
  );
};
