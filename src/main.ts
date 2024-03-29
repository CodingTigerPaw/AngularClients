import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { RxjsModule } from './app/modules/rxjs/rxjs.module';
import { ClientsModule } from './app/modules/clients/clients.module';
import { AuthModule } from './app/modules/auth/auth.module';
import { AppRoutingModule } from './app/app-routing.module';
import { HomeModule } from './app/modules/home/home.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      HomeModule,
      AppRoutingModule,
      AuthModule,
      ClientsModule,
      RxjsModule
    ),
    provideAnimationsAsync(),
  ],
}).catch((err) => console.error(err));
