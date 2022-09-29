import {reducer as todoItems} from './todo-items/reducer';
import {reducer as filters} from './filter/reducer';

const rootReducer = {
  todoItems,
  filters,
};

export {rootReducer};
