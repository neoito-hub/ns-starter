import { GetUserDetailsAction, GetUserDetailsActionTypes } from '../actions';

export interface AuthState {
  user: { name?: string };
  error: string | null;
  loading: boolean;
}

export const initialState: AuthState = {
  user: { name: 'ramu' },
  error: null,
  loading: false
};

export function UserReducer(
  state = initialState,
  action: GetUserDetailsAction
): AuthState {
  switch (action.type) {
    case GetUserDetailsActionTypes.GET_USER_DETAILS: {
      return {
        ...state,
        loading: true
      };
    }
    case GetUserDetailsActionTypes.GET_USER_DETAILS_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        error: null,
        loading: false
      };
    }
    case GetUserDetailsActionTypes.GET_USER_DETAILS_ERROR: {
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    }
    case GetUserDetailsActionTypes.RESET: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
