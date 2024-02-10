import Realm from 'realm';
import {ProductSchema} from './schemas/ProductSchema';
import {ClientSchema} from './schemas/ClientSchema';

export const getRealm = async () =>
  await Realm.open({
    path: 'vidyatest-db',
    schema: [ProductSchema, ClientSchema],
    schemaVersion: 4,
  });
