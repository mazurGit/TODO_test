import {createReducer} from '@reduxjs/toolkit';
import {addItem} from './action';
import {TodoItem} from '../../common/types/types';

type InitialState = {
  items: TodoItem[] | [];
};

const initialState: InitialState = {
  items: [],
};

const reducer = createReducer(initialState, builder => {
  builder.addCase(addItem, (state, action) => {
    state.items = [...state.items, action.payload];
  });
});

export {reducer};
