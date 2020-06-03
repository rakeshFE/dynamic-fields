import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string): boolean {
    const sys_username: string = 'admin';
    const sys_password: string = 'password123';
    let log: boolean;
    if (username === sys_username && sys_password === password) {
      let user: User = {
        id: 1,
        firstName: 'admin',
        lastName: '',
        username: sys_username,
        password: sys_password,
        authdata: window.btoa(username + ':' + password)
      };

      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      log = true;

    }
    return log;

  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  getUserLoggedIn(): Observable<User> {
    return this.currentUser;
  }

}
