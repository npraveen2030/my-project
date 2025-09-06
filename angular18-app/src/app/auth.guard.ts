import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  //   canActivate(): boolean {
  //     return !!localStorage.getItem('isLoggedIn') || this.router.navigate(['/login']);
  //   }

  canActivate(): boolean {
    if (!!localStorage.getItem('isLoggedIn')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
