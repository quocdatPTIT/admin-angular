import { createReducer, on } from '@ngrx/store';
import { loginSuccess } from './auth.action';

export interface AuthenticationState {
  accessToken: string | null;
}

export const initialState: AuthenticationState = {
  accessToken: null
};

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { user: { access_token } }) => {
    console.log(access_token);
    return {
      ...state,
      accessToken: access_token
    }
  })
);
