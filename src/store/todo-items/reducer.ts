import {createReducer} from '@reduxjs/toolkit';
import {
  addItem,
  changeItemStatus,
  resetItemsList,
  removeItemById,
} from './action';
import {TodoItem} from '../../common/types/types';

type InitialState = {
  items: TodoItem[] | [];
};

const initialState: InitialState = {
  items: [],
};

const reducer = createReducer(initialState, builder => {
  builder
    .addCase(addItem, (state, action) => {
      state.items = [...state.items, action.payload];
    })
    .addCase(changeItemStatus, (state, action) => {
      state.items = [
        ...state.items.map(item =>
          item.id === action.payload ? {...item, done: !item.done} : item,
        ),
      ];
    })
    .addCase(resetItemsList, () => {
      return {...initialState};
    })
    .addCase(removeItemById, (state, action) => {
      state.items = [...state.items.filter(item => item.id !== action.payload)];
    });
});

export {reducer};
