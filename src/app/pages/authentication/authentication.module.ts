import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffect } from './store/auth.effect';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    StoreModule.forFeature({
      name: 'auth',
      reducer: authReducer
    }),
    EffectsModule.forFeature([AuthEffect])
  ]
})
export class AuthenticationModule {}
