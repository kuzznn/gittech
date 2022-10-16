import { PC_PART_TYPES } from '@enums/PCPartType';

export interface IPCPart {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
  type: PC_PART_TYPES;
}
