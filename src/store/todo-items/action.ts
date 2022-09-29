import {createAction, PrepareAction} from '@reduxjs/toolkit';
import {ActionType} from './common';
import {TodoItem} from '../../common/types/types';
import uuid from 'react-native-uuid';

const addItem = createAction<PrepareAction<TodoItem>>(
  ActionType.ADD_ITEM,
  function prepare(item) {
    return {
      payload: {
        ...item,
        id: uuid.v4().toString(),
      },
    };
  },
);

export {addItem};
