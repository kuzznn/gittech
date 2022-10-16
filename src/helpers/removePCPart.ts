import { Dispatch, SetStateAction } from 'react';
import { ICartQuantity, IPCPart } from '@interfaces';

export const removePCPartSelected = (
  setListPartSelected: Dispatch<SetStateAction<IPCPart[]>>,
  listPartSelected: IPCPart[],
  pcPartSelected: IPCPart,
) => {
  setListPartSelected(
    listPartSelected.filter((pcPart) => pcPart.id !== pcPartSelected.id),
  );
};

export const removePCPartInCart = (
  setListPartInCart: Dispatch<SetStateAction<ICartQuantity[]>>,
  listPartInCart: ICartQuantity[],
  pcPartSelected: IPCPart,
) => {
  setListPartInCart(
    listPartInCart.filter(
      (pcPartInCart) => pcPartInCart.productId !== pcPartSelected.id,
    ),
  );
};
