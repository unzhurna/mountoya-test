// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { AuthService } from './auth/services/auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private autService: AuthService, private router: Router) {}

//   // canActivate(
//   //   next: ActivatedRouteSnapshot,
//   //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//   //   return this.autService.user.pipe(map(response => {
//   //     if (response) return true;
//   //     else {
//   //       this.router.navigateByUrl("/");
//   //       return false;
//   //     }
//   //   }));
//   // }

// }