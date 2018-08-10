import { AuthState, UserReducer } from '~/src/store/authentication';
import { ActionReducerMap } from '@ngrx/store';

export interface RootState {
  user: AuthState;
}
export const reducers: ActionReducerMap<RootState> = {
  user: UserReducer
};
