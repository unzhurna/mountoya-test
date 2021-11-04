import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth/services/auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private router: Router, private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();

    if (!request.headers.get("Authorization")) {
      if (token) {
        request = request.clone({
          setHeaders: {
            Authorization: "Bearer " + token,
          },
        });
      }
    }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // console.log("event--->>>", event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          if (error.error.success === false) {
          } else {
            this.authService.removeToken();
            this.router.navigate(["/"]);
          }
        }
        return throwError(error);
      })
    );
  }
}
