import {ClientType} from './client';
import {ProductType} from './product';

export interface decrementQuantityProps {
  product: ProductType;
  newClientProp: ClientType[];
}
