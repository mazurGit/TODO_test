import {createAction} from '@reduxjs/toolkit';
import {ActionType} from './common';
import {TodoItem} from '../../common/types/types';

const addItem = createAction<TodoItem>(ActionType.ADD_ITEM);

export {addItem};
