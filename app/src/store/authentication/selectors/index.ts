import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromUser from '../reducers/user-details.reducer';

export const selectUserState = createFeatureSelector<fromUser.AuthState>(
  'user'
);
export const GetUserDetails$ = createSelector(
  selectUserState,
  state => state.user
);
export const GetUserDetailsErrorStatus$ = createSelector(
  selectUserState,
  state => state.error
);
