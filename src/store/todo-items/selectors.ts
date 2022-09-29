import {RootState} from '../../common/types/types';
import {createSelector} from '@reduxjs/toolkit';
import {StatusButtonSelector} from '../../common/enums/enums';

const selectItems = (state: RootState) => state.todoItems.items;

const selectFilteredItems = createSelector(
  selectItems,
  (state: RootState) => state.filters.status,
  (items, statusFilter) => {
    switch (statusFilter) {
      case StatusButtonSelector.DONE:
        return items.filter(item => item.done);
      case StatusButtonSelector.UNDONE:
        return items.filter(item => !item.done);
      default:
        return items;
    }
  },
);
export {selectItems, selectFilteredItems};
