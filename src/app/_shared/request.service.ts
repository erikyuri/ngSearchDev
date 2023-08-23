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
      'Content-Type': 'application/json',
    }),
  };

  getUser(user?: string): Observable<User> {
    return this.http.get<User>(`https://api.github.com/users/${user}`, this.httpOptions).pipe(catchError(this.handleError))
  }

  getRepository(user?: string): Observable<Repositories[]> {
    return this.http.get<Repositories[]>(`https://api.github.com/users/${user}/repos`, this.httpOptions).pipe(
      map(res => res.sort((a, b) => a.stargazers_count! - b.stargazers_count!).reverse()), catchError(this.handleError))
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
