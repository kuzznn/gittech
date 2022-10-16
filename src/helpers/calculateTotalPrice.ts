import { ICartQuantity, IPCPart } from '@interfaces';

export const calculateTotalPrice = ({
  listPartSelected = [],
  listPartInCart = [],
}: {
  listPartSelected: IPCPart[];
  listPartInCart: ICartQuantity[];
}): string => {
  const calculateTotalPrice = listPartSelected.reduce(
    (prevPrice, pcPartSelected) => {
      const quantityPCPart = listPartInCart.find(
        (pcPart) => pcPartSelected.id === pcPart.productId,
      );
      const price = quantityPCPart
        ? quantityPCPart?.quantity * pcPartSelected.price
        : 0;
      return prevPrice + price;
    },
    0,
  );
  return calculateTotalPrice.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
};
