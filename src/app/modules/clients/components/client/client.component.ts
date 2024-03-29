import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../../core/services/clients.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Client } from '../../../core/models/clients.model';
import { MatDialog } from '@angular/material/dialog';
import { DeleteClientDialogComponent } from './delete-client-dialog/delete-client-dialog.component';
import { MatButton } from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrl: './client.component.scss',
    standalone: true,
    imports: [NgIf, MatButton],
})
export class ClientComponent implements OnInit {
  constructor(
    private clients: ClientsService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  client!: Client;

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap((params) => this.clients.getClient(params['id'])))
      .subscribe({
        next: (client) => {
          this.client = client;
        },
        error: () => {},
        complete: () => {
          console.log(`user fetched`);
        },
      });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DeleteClientDialogComponent, {
      data: {
        client: this.client,
      },
    });
  }
}
