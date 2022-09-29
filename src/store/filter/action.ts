import {createAction} from '@reduxjs/toolkit';
import {ActionType} from './common';
import {StatusButtonSelector} from '../../common/enums/enums';

const setStatusFilter = createAction<StatusButtonSelector>(
  ActionType.ADD_STATUS_FILTER,
);

const setSearchValue = createAction<string>(ActionType.ADD_VALUE_FILTER);

export {setStatusFilter, setSearchValue};
