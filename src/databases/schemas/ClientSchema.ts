import {ObjectSchema} from 'realm';

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
  },
};
