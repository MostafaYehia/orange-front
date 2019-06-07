import { Injectable } from "@angular/core";
import { AuthApiService } from "../services/auth-api.service";
import { CanActivate, Router } from "@angular/router";
import { AppState } from "src/app/ngrx-store/reducers";
import { Store } from "@ngrx/store";
import { isLoggedState } from "../selectors";
import { Observable, pipe, of } from "rxjs";
import { tap, map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
@Injectable()
export class ChechAuthService implements CanActivate {
  constructor(private router: Router, private store: Store<AppState>) {
    console.log("Can activated: ");
  }
  

  canActivate(): Observable<boolean> {
    return this.store.select(isLoggedState).pipe(
      map(loggedIn => {
        if (loggedIn) {
          console.log("Navigate to home");
          this.router.navigate(["/"]);
          return false;
        } else {
          console.log("Continue");
          return true;
        }
      })
    );
  }
}