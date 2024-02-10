import {configureStore} from '@reduxjs/toolkit';

import {productDetailedSlice} from './product/slice';

const store = configureStore({
  reducer: {product: productDetailedSlice.reducer},
});

export default store;
