import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { CandidatServices } from "./candidat.service";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(private authService: CandidatServices, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const isAuth = this.authService.getIsAuth();
    if (!isAuth) {
      this.router.navigate(["adminLogin"]);
    }
    return isAuth;
  }
}
