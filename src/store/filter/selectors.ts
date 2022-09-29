import {RootState} from '../../common/types/types';

const selectStatusFilter = (state: RootState) => state.filters.status;

export {selectStatusFilter};
