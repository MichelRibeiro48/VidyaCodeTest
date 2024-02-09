export interface ProductSchema {
  name: string;
  properties: {
    _id: string;
    name: string;
    price: string;
    description: string;
    uriImage: string;
  };
  primaryKey: string;
}
