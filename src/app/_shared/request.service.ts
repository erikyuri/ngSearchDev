import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { User } from './model/user.model';
import { Repositories } from './model/repositories.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  userData?: User = new User;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer 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',
      'Content-Type': 'application/json',
    }),
  };

  getUser(user?: string): Observable<User> {
    return this.http.get<User>(`https://api.github.com/users/${user}`, this.httpOptions).pipe(catchError(this.handleError))
  }

  getRepository(user?: string): Observable<Repositories[]> {
    return this.http.get<Repositories[]>(`https://api.github.com/users/${user}/repos`, this.httpOptions).pipe(catchError(this.handleError))
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
