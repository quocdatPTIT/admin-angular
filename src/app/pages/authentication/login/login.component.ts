import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { loginAction } from '../store/auth.action';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginComponent {
  store$ = inject(Store);
  onSignIn() {
    this.store$.dispatch(loginAction({ credential: { username: 'dattq@gmail.com', password: '123456789@' } }))
  }
}
