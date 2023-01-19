import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loginAction, loginSuccess } from './auth.action';
import { exhaustMap, map } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '@libs/service/local-storage.service';
import { ACCESS_TOKEN } from '@libs/token/index';

@Injectable()
export class AuthEffect {
  private actions$ = inject(Actions);
  private authService = inject(AuthService);
  private router = inject(Router);
  private localStorageService = inject(LocalStorageService);
  private accessToken = inject(ACCESS_TOKEN);
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      exhaustMap((action) =>
        this.authService.login(action.credential).pipe(
          map(({ access_token }) => {
            this.localStorageService.saveData(this.accessToken, access_token);
            this.router.navigate(['/default']);
            return loginSuccess({ user: { access_token } });
          })
        )
      )
    )
  );
}
