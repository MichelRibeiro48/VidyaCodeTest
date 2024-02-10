import { configureStore } from '@reduxjs/toolkit';

import { detailedProduct, productDetailedSlice } from './product/slice';

const store = configureStore({
  reducer: { product: productDetailedSlice.reducer },
});

export default store;