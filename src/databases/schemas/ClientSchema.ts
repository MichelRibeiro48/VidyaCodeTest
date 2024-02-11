import { ObjectSchema } from 'realm';

export const ProductClientSchema = {
  name: 'ProductClient',
  properties: {
    _id: 'string',
    name: 'string',
    price: 'string',
    description: 'string',
    uriImage: 'string',
  },
  primaryKey: '_id',
};
export const ClientSchema: ObjectSchema = {
  name: 'Client',
  properties: {
    _id: 'string',
    name: 'string',
    CNPJ: 'string',
    phone: 'string',
    cep: 'string',
    state: 'string',
    city: 'string',
    district: 'string',
    address: 'string',
    number: 'string',
    colorThumb: 'string',
    product: 'ProductClient[]',
  },
};
