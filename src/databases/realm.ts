import Realm from 'realm';
import {ProductSchema} from './schemas/ProductSchema';
import {ClientSchema, ProductClientSchema} from './schemas/ClientSchema';

export const getRealm = async () =>
  await Realm.open({
    path: 'vidyatest-db',
    schema: [ProductSchema, ClientSchema, ProductClientSchema],
    schemaVersion: 5,
  });
