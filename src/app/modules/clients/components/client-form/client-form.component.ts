import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { postClientForm } from '../../../core/models/clients.model';
import { ClientsService } from '../../../core/services/clients.service';
import { Router } from '@angular/router';
import { postcodeValidator } from '../../../shared/validators/postcode.validator';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/form-field';
@Component({
    selector: 'app-client-form',
    templateUrl: './client-form.component.html',
    styleUrl: './client-form.component.scss',
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormField,
        MatLabel,
        MatInput,
        MatButton,
    ],
})
export class ClientFormComponent implements OnInit {
  constructor(private clients: ClientsService, private router: Router) {}
  clientForm!: FormGroup<postClientForm>;

  get controls() {
    return this.clientForm.controls;
  }

  ngOnInit(): void {
    this.initForm();
  }

  onAddClient() {
    console.log(this.clientForm.value);
    this.clients.postClient(this.clientForm.getRawValue()).subscribe({
      next: () => {
        this.router.navigate(['/clients']);
      },
    });
  }
  private initForm() {
    this.clientForm = new FormGroup({
      firstname: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      surname: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      phone: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      adress: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      postcode: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, postcodeValidator()],
      }),
    });
  }
}
