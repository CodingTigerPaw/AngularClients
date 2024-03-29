import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [HeaderComponent, SpinnerComponent],
  imports: [SharedModule, RouterModule],
  //MaterialModule
  exports: [HeaderComponent, SpinnerComponent],
})
export class CoreModule {}
