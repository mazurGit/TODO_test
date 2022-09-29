import {createReducer} from '@reduxjs/toolkit';
import {setStatusFilter, setSearchValue} from './action';
import {StatusButtonSelector} from '../../common/enums/enums';

type InitialState = {
  status: StatusButtonSelector;
  searchValue: string;
};

const initialState: InitialState = {
  status: StatusButtonSelector.ALL,
  searchValue: '',
};

const reducer = createReducer(initialState, builder => {
  builder
    .addCase(setStatusFilter, (state, action) => {
      state.status = action.payload;
    })
    .addCase(setSearchValue, (state, action) => {
      state.searchValue = action.payload;
    });
});

export {reducer};
