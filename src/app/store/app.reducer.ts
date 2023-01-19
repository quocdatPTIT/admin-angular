import { createReducer } from '@ngrx/store';

export const initialState = {
  count: 0
};

export const appReducer = createReducer(initialState);
