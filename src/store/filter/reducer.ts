import {createReducer} from '@reduxjs/toolkit';
import {setStatusFilter} from './action';
import {StatusButtonSelector} from '../../common/enums/enums';

type InitialState = {
  status: StatusButtonSelector;
};

const initialState: InitialState = {
  status: StatusButtonSelector.ALL,
};

const reducer = createReducer(initialState, builder => {
  builder.addCase(setStatusFilter, (state, action) => {
    state.status = action.payload;
  });
});

export {reducer};
