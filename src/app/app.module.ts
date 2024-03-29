import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeModule } from './modules/home/home.module';
import { AuthModule } from './modules/auth/auth.module';
import { ClientsModule } from './modules/clients/clients.module';
import { RxjsModule } from './modules/rxjs/rxjs.module';
import { SpinnerComponent } from './modules/core/components/spinner/spinner.component';
import { FooterComponent } from './modules/core/components/footer/footer.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    AuthModule,
    ClientsModule,
    CoreModule,
    RxjsModule,
    FooterComponent,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
