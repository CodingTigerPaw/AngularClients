import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { NonNullAssert } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  hide = true;
  registerForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.email, Validators.minLength(4)],
      nonNullable: true,
    }),
    username: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    password: new FormControl('', { validators: [], nonNullable: true }),
  });

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.register(this.registerForm.getRawValue()).subscribe({
      next: (value) => {
        console.log(value);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  get controls() {
    return this.registerForm.controls;
  }
  getErrorMessage(control: FormControl) {
    if (control.hasError('required')) {
      return 'You must enter a value';
    }

    return control.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {
    this.registerForm.controls.email.valueChanges.subscribe((text) => {
      console.log(text);
      this.controls.email.hasError('');
    });
  }
}
