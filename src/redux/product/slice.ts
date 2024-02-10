import {createSlice} from '@reduxjs/toolkit';
import {productDetailedInitialState} from './initialState';

export const productDetailedSlice = createSlice({
  name: 'productDetailed',
  initialState: {productDetailedInitialState},
  reducers: {
    addProductDetailed: (state, action) => {
      state.productDetailedInitialState = {...action.payload};
    },
  },
});

export const {addProductDetailed} = productDetailedSlice.actions;
