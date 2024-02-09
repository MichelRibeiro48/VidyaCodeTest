export const ProductSchema = {
  name: 'Product',
  properties: {
    _id: 'string',
    name: 'string',
    price: 'string',
    description: 'string',
    uriImage: 'string',
  },
  primaryKey: '_id',
};
