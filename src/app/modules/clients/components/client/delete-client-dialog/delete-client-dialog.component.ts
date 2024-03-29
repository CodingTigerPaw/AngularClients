import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { Client } from '../../../../core/models/clients.model';
import { ClientsService } from '../../../../core/services/clients.service';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-delete-client-dialog',
    templateUrl: './delete-client-dialog.component.html',
    styleUrl: './delete-client-dialog.component.scss',
    standalone: true,
    imports: [
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatButton,
        MatDialogClose,
    ],
})
export class DeleteClientDialogComponent implements OnInit {
  client!: Client;
  constructor(
    private dialogRef: MatDialogRef<DeleteClientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { client: Client },
    private clientService: ClientsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.client = this.data.client;
  }
  onDelete() {
    this.clientService.deleteClient(this.client.id).subscribe({
      next: () => {
        this.dialogRef.close();
        this.router.navigate(['/clients']);
      },
    });
  }
}
