import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoggedUser, LoginDTO, RegisterDTO } from '../components/models/auth';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  get: any;
  constructor(private http: HttpClient) {}
  login(model: LoginDTO): Observable<LoggedUser> {
    return this.http.post<LoggedUser>(
      `${environment.JSON_SERVER_BASE_URL}/login`,
      model)
      .pipe(
        tap(dati => console.log("SERVIZIO AUTH:",dati)),
        tap((user) => this.setLoggedUser(user))
      );
  }
  register(model: RegisterDTO): Observable<LoggedUser> {
    return this.http.post<LoggedUser>(
      `${environment.JSON_SERVER_BASE_URL}/register`,
      model
    );
  }
  setLoggedUser(user: LoggedUser) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  getLoggedUser(): LoggedUser | null {
    const loggedUser = localStorage.getItem('user');
    if (loggedUser) {
      return JSON.parse(loggedUser) as LoggedUser;
    }
    return null;
  }
  logout() {
    localStorage.removeItem('user');
  }
}
