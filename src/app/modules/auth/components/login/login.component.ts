import { Component } from '@angular/core';
import { UserInterface } from '../../../core/models/user.model';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  hide = true;
  loginData: UserInterface = {
    username: '',
    password: '',
  };

  errorMessage = '';
  constructor(private authService: AuthService) {}

  onLogin() {
    console.log(this.loginData);
    this.authService.login(this.loginData).subscribe({
      next: (value) => {
        console.log(value);
        if (value.length === 0) {
          this.errorMessage = 'Invalid credencials';
        }
      },
      error: (err) => {
        this.errorMessage = 'Error ocures';
      },
    });
  }
}
