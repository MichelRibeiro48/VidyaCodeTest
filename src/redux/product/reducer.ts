import detailedProductTypes from './action-types';

const initialState = {
  productInfo: {},
};

const detailedProductReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case detailedProductTypes.DETAILED_PRODUCT:
      return {
        ...initialState,
        productInfo: action.payload,
      };
    default:
      return state;
  }
};
