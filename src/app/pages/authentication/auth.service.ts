import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login({ username, password }: { username: string, password: string }) {
    console.log(123123);
    return of({
      access_token: `${username}-${password}`
    })
  }
}
