import { configureStore } from '@reduxjs/toolkit';

import { productDetailedSlice } from './product/slice';
import { clientDescriptionSlice } from './client/slice';
import { cartSlice } from './cart/slice';

const store = configureStore({
  reducer: {
    product: productDetailedSlice.reducer,
    client: clientDescriptionSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
