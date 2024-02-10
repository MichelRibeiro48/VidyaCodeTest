import {createSlice} from '@reduxjs/toolkit';
import {ClientDescriptionInitialState} from './initialState';

export const clientDescriptionSlice = createSlice({
  name: 'clientDescription',
  initialState: {ClientDescriptionInitialState},
  reducers: {
    addClientDescription: (state, action) => {
      state.ClientDescriptionInitialState = {...action.payload};
    },
  },
});

export const {addClientDescription} = clientDescriptionSlice.actions;
