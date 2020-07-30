import { createSelector } from 'reselect';
const getHomeReducer = state => state.HomeReducer;
const mergeSelectedReducer = HomeReducer => HomeReducer
export const SelectState = createSelector([getHomeReducer], mergeSelectedReducer)