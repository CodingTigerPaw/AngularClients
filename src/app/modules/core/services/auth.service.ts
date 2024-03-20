import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { PostUser, User, getUserResponse } from '../models/user.model';
import { Router } from '@angular/router';
import { UserInterface } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.apiUrl;
  user = new BehaviorSubject<User | null>(null);
  constructor(private Http: HttpClient, private router: Router) {}

  login(userData: UserInterface): Observable<User[]> {
    return this.Http.get<getUserResponse[]>(`${this.apiUrl}/users`).pipe(
      map((userArr) =>
        userArr.filter(
          (user) =>
            user.username === userData.username &&
            user.password === userData.password
        )
      ),
      map((userArr) =>
        userArr.map((user) => new User(user.email, user.username))
      ),
      tap((userArr) => this.handleAutentication(userArr))
    );
  }
  isLoggedIn(): boolean {
    return !!this.user.getValue();
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/login']);

    localStorage.removeItem('user');
  }

  register(userData: PostUser) {
    return this.Http.post(`${this.apiUrl}/users`, userData);
  }

  autoLogin() {
    const userData: { email: string; username: string } = JSON.parse(
      localStorage.getItem('user') as string
    );

    if (!userData) {
      return;
    }
    const user = new User(userData.email, userData.username);
    this.user.next(user);
  }

  handleAutentication(userArr: User[]) {
    if (userArr.length === 0) {
      return;
    }
    const user: User = userArr[0];
    this.user.next(user);
    localStorage.setItem('user', JSON.stringify(user));

    this.router.navigate(['/clients']);
  }
}
