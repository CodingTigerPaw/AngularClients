import { Component, OnInit } from '@angular/core';
import { AuthService } from './modules/core/services/auth.service';
import { FooterComponent } from './modules/core/components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './modules/core/components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
})
export class AppComponent implements OnInit {
  title = 'tutorial';
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.autoLogin();
  }
}
