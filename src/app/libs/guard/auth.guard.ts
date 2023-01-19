import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../service/local-storage.service';
import { ACCESS_TOKEN } from '../token';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private _localStorage = inject(LocalStorageService);
  private router = inject(Router);
  private accessToken = inject(ACCESS_TOKEN);
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = this._localStorage.getData(this.accessToken);
    const requiredAuth = route.data['requiredAuth'];
    if (token || !requiredAuth) {
      return true;
    }

    this.router.navigate(['/guest/login']);
    return false;
  }
}
