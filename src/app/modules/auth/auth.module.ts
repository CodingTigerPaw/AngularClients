import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';

import { RegisterComponent } from './components/register/register.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    AuthRoutingModule,
    LoginComponent,
    RegisterComponent,
    HttpClientModule,
  ],
  exports: [LoginComponent, RegisterComponent],
})
export class AuthModule {}
