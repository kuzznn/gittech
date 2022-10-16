import { PC_PART_TYPES } from '@enums';
import { IPCPart } from '@interfaces';

export const filterPCPartByType = (
  data: IPCPart[],
  typeName: PC_PART_TYPES,
) => {
  const listPCPartFiltered = data.filter((pcPart) => pcPart.type === typeName);
  return listPCPartFiltered;
};
