import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import type { Response } from '@core/models/response.model';
import { environment } from '@environments/environment';
import { Observable, throwError, tap } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HandleToken } from './handle-token';
import { responseError } from '@core/models/responseError.model';
import { ProfileInfo } from './profile-info';
import { TVideoStreaming } from '@models/videoStreaming.model';
import { VideoStreaming } from './video-streaming';

@Injectable({
  providedIn: 'root'
})
export class RequestApi {
  private http = inject(HttpClient);
  private handleToken = inject(HandleToken);
  private profileInfo = inject(ProfileInfo);
  private videoStreaming = inject(VideoStreaming);

  private apiUrl = environment.apiUrl;

  profile(): Observable<Response> {
    return this.http.get<Response>(`${this.apiUrl}/profile`, { withCredentials: true })
              .pipe(
                tap((value) => {
                  const data = { email: value.data.email, username: value.data.username };
                  this.profileInfo.setValue(data as { email: string, username: string });

                }),
                catchError((error: responseError) => this.handleError(error))

              );

  }

  catalog(): Observable<{ message: string } & TVideoStreaming> {
    return this.http.get<{ message: string } & TVideoStreaming>(`${this.apiUrl}/catalog`, { withCredentials: true })
                .pipe(
                  tap((content) => this.videoStreaming.setVideoStreamingContent(content)),
                  catchError((error: responseError) => this.handleError(error))

                )

  }

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
  verify(data: { email: string, code: string }): Observable<Response> {
    return this.http.post<Response>(
      `${this.apiUrl}/verify`,
      data,
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
      catchError((error: responseError) => this.handleError(error))

    );

  }

  logout(): Observable<Response> {
    return this.http.post<Response>(`${this.apiUrl}/logout`, {}, { withCredentials: true })
                      .pipe(
                        tap(() => this.handleToken.clear()),
                        catchError((error: responseError) => this.handleError(error))

                      );

  }

  changeUsername(data: { newUsername: string }): Observable<Response> {
    return this.http.put<Response>(`${this.apiUrl}/change-username`, data, { withCredentials: true })
                      .pipe(
                        tap((value) => {
                          const username = value.data.username;
                          this.profileInfo.setUsername(username!);

                        }),
                        catchError((error: responseError) => this.handleError(error))

                      );

  }

  changePassword(data: { password: string, newPassword: string }): Observable<Response> {
    return this.http.put<Response>(`${this.apiUrl}/change-password`, data, { withCredentials: true })
                      .pipe(
                        catchError((error: responseError) => this.handleError(error))

                      );

  }

  delete(): Observable<Response> {
    return this.http.delete<Response>(`${this.apiUrl}/delete`, { withCredentials: true })
                      .pipe(
                        tap(() => this.handleToken.clear()),
                        catchError((error: responseError) => this.handleError(error))

                      );

  }

  private handleError(error: responseError): Observable<never> {
    return throwError(() => error);

  }

}
