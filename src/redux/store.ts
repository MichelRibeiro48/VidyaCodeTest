import { configureStore } from '@reduxjs/toolkit';

import { productDetailedSlice } from './product/slice';
import { clientDescriptionSlice } from './client/slice';

const store = configureStore({
  reducer: {
    product: productDetailedSlice.reducer,
    client: clientDescriptionSlice.reducer,
  },
});

export default store;
