import Realm from 'realm';
import {ProductSchema} from './schemas/ProductSchema';

export const getRealm = async () =>
  await Realm.open({
    path: 'vidyatest-db',
    schema: [ProductSchema],
  });
