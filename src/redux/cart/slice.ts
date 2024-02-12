import {createSlice} from '@reduxjs/toolkit';
import {cartInitialState} from './initialState';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addProductInSlice(state, action) {
      const productAlreadyInCart = state.products.some(
        product => product.id === action.payload.id,
      );

      if (productAlreadyInCart) {
        state.products = state.products.map(product =>
          product.id === action.payload.id ? {...product} : product,
        );

        return;
      }

      state.products = [...state.products, {...action.payload, quantity: 1}];
    },
    decreaseProductQuantity(state, action) {
      state.products = state.products.map(product =>
        product.id === action.payload
          ? {...product, quantity: product.quantity - 1}
          : product,
      );
    },
    incrementProductQuantity(state, action) {
      state.products = state.products.map(product =>
        product.id === action.payload
          ? {...product, quantity: product.quantity + 1}
          : product,
      );
    },
  },
});

export const {} = cartSlice.actions;
