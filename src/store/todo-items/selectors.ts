import {RootState} from '../../common/types/types';
import {createSelector} from '@reduxjs/toolkit';
import {StatusButtonSelector} from '../../common/enums/enums';

const selectItems = (state: RootState) => state.todoItems.items;

const selectFilteredItems = createSelector(
  selectItems,
  (state: RootState) => state.filters,
  (items, {status, searchValue}) => {
    const searchedItems = items.filter(
      ({title}) => title.toUpperCase().indexOf(searchValue.toUpperCase()) > -1,
    );
    switch (status) {
      case StatusButtonSelector.DONE:
        return searchedItems.filter(item => item.done);
      case StatusButtonSelector.UNDONE:
        return searchedItems.filter(item => !item.done);
      default:
        return searchedItems;
    }
  },
);
export {selectItems, selectFilteredItems};
