import {ProductType} from './product';

interface ProductCart extends ProductType {
  quantity: number;
}
export interface ClientListButton {
  name: string;
  CNPJ: string;
  cep: string;
  phone: string;
  state: string;
  city: string;
  district: string;
  address: string;
  number: string;
  cart?: ProductCart[];
}
