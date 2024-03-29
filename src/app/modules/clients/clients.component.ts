import { AfterViewInit, Component } from '@angular/core';
import { ClientsService } from '../core/services/clients.service';
import { ClientsTableComponent } from './components/clients-table/clients-table.component';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrl: './clients.component.scss',
    standalone: true,
    imports: [
        MatButton,
        RouterLink,
        ClientsTableComponent,
    ],
})
export class ClientsComponent {}
