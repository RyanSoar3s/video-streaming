import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import type { Response } from '@core/models/response.model';
import { environment } from '@environments/environment';
import { Observable, throwError, tap } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HandleToken } from './handle-token';
import { responseError } from '@core/models/responseError.model';

@Injectable({
  providedIn: 'root'
})
export class RequestApi {
  private http = inject(HttpClient);
  private handleToken = inject(HandleToken);

  private apiUrl = environment.apiUrl;

  accessGoogle(token: string): Observable<Response> {
    return this.http.post<Response>(
      `${this.apiUrl}/google`,
      { token },
      { withCredentials: true }

    ).pipe(
      tap((res) => this.handleToken.setToken(res.token!)),
      catchError((error: responseError) => this.handleError(error))

    );

  }

  register(data: { email: string, password: string }): Observable<Response> {
    return this.http.post<Response>(
      `${this.apiUrl}/register`,
      data,
      { withCredentials: true }

    )
    .pipe(
      catchError((error: responseError) => this.handleError(error))

    );

  }

  verify(email: string, code: string): Observable<Response> {
    return this.http.post<Response>(
      `${this.apiUrl}/verify`,
      { email, code },
      { withCredentials: true }

    ).pipe(
      catchError((error: responseError) => this.handleError(error))

    );

  }

  refresh(): Observable<Response>{
    return this.http.post<Response>(
      `${this.apiUrl}/refresh`,
      {},
      { withCredentials: true }

    ).pipe(
      tap((res) => this.handleToken.setToken(res.token!)),
      catchError((error: responseError) => this.handleError(error))

    );

  }

  login(data: { email: string, password: string }): Observable<Response>{
    return this.http.post<Response>(
      `${this.apiUrl}/login`,
      data,
      { withCredentials: true }

    ).pipe(
      tap((res) => this.handleToken.setToken(res.token!)),
      catchError((error) => this.handleError(error))

    );

  }

  private handleError(error: responseError): Observable<never> {
    return throwError(() => error);

  }

}
