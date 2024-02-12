import {ClientType} from './client';

export interface IncrementProductQuantityType {
  product: OrderRegisterData;
  newClientProp: ClientType[];
  totalPriceProp: string;
}
