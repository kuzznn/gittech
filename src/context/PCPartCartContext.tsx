import React, {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useState,
} from 'react';
import { ICartQuantity } from '@interfaces';

type PCPartInCartContext = {
  children: ReactElement | ReactElement[];
};

export type PCPartInCartContextType = {
  listPartInCart: ICartQuantity[];
  setListPartInCart: Dispatch<SetStateAction<ICartQuantity[]>>;
};

export const PCPartInCartContext = createContext<PCPartInCartContextType>({
  listPartInCart: [],
  setListPartInCart: () => null,
});

export const PCPartInCartProvider = ({
  children,
}: PCPartInCartContext): JSX.Element => {
  const [listPartInCart, setListPartInCart] = useState<ICartQuantity[]>([]);

  return (
    <PCPartInCartContext.Provider value={{ listPartInCart, setListPartInCart }}>
      {children}
    </PCPartInCartContext.Provider>
  );
};
