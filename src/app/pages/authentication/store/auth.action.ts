import { createAction, props } from '@ngrx/store';

export const loginAction = createAction(
  '[Login Page] Login',
  props<{ credential: { username: string; password: string } }>()
);

export const loginSuccess = createAction(
  '[Login Page] Login Success',
  props<{ user: { access_token: string } }>()
)
