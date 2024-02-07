export const ProductSchema = {
  name: 'Product',
  properties: {
    _id: 'string',
    name: 'string',
    price: 'number',
    description: 'string',
  },
  primaryKey: '_id',
};
