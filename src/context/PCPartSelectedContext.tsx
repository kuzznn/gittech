import React, {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useState,
} from 'react';
import { IPCPart } from '@interfaces';

type PCPartContext = {
  children: ReactElement | ReactElement[];
};

export type PCPartContextType = {
  listPartSelected: IPCPart[];
  setListPartSelected: Dispatch<SetStateAction<IPCPart[]>>;
};

export const PCPartSelectedContext = createContext<PCPartContextType>({
  listPartSelected: [],
  setListPartSelected: () => null,
});

export const PCPartSelectedProvider = ({
  children,
}: PCPartContext): JSX.Element => {
  const [listPartSelected, setListPartSelected] = useState<IPCPart[]>([]);

  return (
    <PCPartSelectedContext.Provider
      value={{ listPartSelected, setListPartSelected }}
    >
      {children}
    </PCPartSelectedContext.Provider>
  );
};
