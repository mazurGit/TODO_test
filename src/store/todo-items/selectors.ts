import {RootState} from '../../common/types/types';

const selectItems = (state: RootState) => state.todoItems.items;

export {selectItems};
