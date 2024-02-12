import {createSlice} from '@reduxjs/toolkit';

import {ClientDescriptionInitialState} from './initialState';

export const clientDescriptionSlice = createSlice({
  name: 'clientDescription',
  initialState: {ClientDescriptionInitialState},
  reducers: {
    addClientDescription: (state, action) => {
      const clientAlreadyInSlice = state.ClientDescriptionInitialState.some(
        client => client.CNPJ === action.payload.CNPJ,
      );
      if (clientAlreadyInSlice) {
        state.ClientDescriptionInitialState =
          state.ClientDescriptionInitialState.map(client =>
            client.CNPJ === action.payload.CNPJ ? {...client} : client,
          );

        return;
      }

      state.ClientDescriptionInitialState = [
        ...state.ClientDescriptionInitialState,
        {...action.payload},
      ];
    },
    addProductInSlice(state, action) {
      console.log(state.ClientDescriptionInitialState);
      const selectedClient = state.ClientDescriptionInitialState.filter(
        client => client.CNPJ === action.payload.newClientProp[0].CNPJ,
      );

      const productAlreadyInCart = selectedClient[0].cart.some(
        product => product.id === action.payload.product.id,
      );

      if (productAlreadyInCart) {
        selectedClient[0].cart = selectedClient[0].cart.map(cart =>
          cart.id === action.payload.product.id
            ? {
                ...cart,
                quantity: cart.quantity + 1,
                totalPrice:
                  cart.totalPrice +
                  Number(cart.price.replace('R$ ', '').replace(',', '.')),
              }
            : cart,
        );

        return;
      }

      selectedClient[0].cart = [
        ...selectedClient[0].cart,
        {
          ...action.payload.product,
          quantity: 1,
          totalPrice: Number(
            action.payload.totalPriceProp.replace('R$ ', '').replace(',', '.'),
          ),
        },
      ];
    },
    decreaseProductQuantity(state, action) {
      const selectedClient = state.ClientDescriptionInitialState.filter(
        client => client.CNPJ === action.payload.newClientProp[0].CNPJ,
      );

      const productAlreadyInCart = selectedClient[0].cart.some(
        product => product.id === action.payload.product.id,
      );

      if (productAlreadyInCart) {
        selectedClient[0].cart = selectedClient[0].cart.map(cart =>
          cart.id === action.payload.product.id
            ? {...cart, quantity: cart.quantity > 0 && cart.quantity - 1}
            : cart,
        );

        return;
      }

      selectedClient[0].cart = [
        ...selectedClient[0].cart,
        {...action.payload.product, quantity: 1, totalPrice: 0},
      ];
    },
  },
});

export const {
  addClientDescription,
  addProductInSlice,
  decreaseProductQuantity,
} = clientDescriptionSlice.actions;
