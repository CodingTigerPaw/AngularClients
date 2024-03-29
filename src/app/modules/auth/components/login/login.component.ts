import { Component } from '@angular/core';
import { UserInterface } from '../../../core/models/user.model';
import { AuthService } from '../../../core/services/auth.service';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton, MatButton } from '@angular/material/button';
import { AlertComponent } from '../../../shared/components/alert/alert.component';
import { NgIf } from '@angular/common';
import { MatInput } from '@angular/material/input';
import {
  MatFormField,
  MatLabel,
  MatSuffix,
} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    NgIf,
    AlertComponent,
    MatIconButton,
    MatSuffix,
    MatIcon,
    MatButton,
    RouterLink,
  ],
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
        console.log(err);
        this.errorMessage = 'Error ocures';
      },
    });
  }
}
