import detailedProductTypes from './action-types';

export const setProductDetailed = (payload: any) => ({
  type: detailedProductTypes.DETAILED_PRODUCT,
  payload,
});
