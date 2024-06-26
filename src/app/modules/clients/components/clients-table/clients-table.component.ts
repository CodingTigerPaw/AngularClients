import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ClientsService } from '../../../core/services/clients.service';
import { Client } from '../../../core/models/clients.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
@Component({
    selector: 'app-clients-table',
    templateUrl: './clients-table.component.html',
    styleUrl: './clients-table.component.scss',
    standalone: true,
    imports: [
        MatInput,
        MatTable,
        MatColumnDef,
        MatHeaderCellDef,
        MatHeaderCell,
        MatCellDef,
        MatCell,
        MatButton,
        RouterLink,
        MatHeaderRowDef,
        MatHeaderRow,
        MatRowDef,
        MatRow,
        MatPaginator,
    ],
})
export class ClientsTableComponent implements AfterViewInit {
  constructor(private clients: ClientsService) {}

  displayedColumns: string[] = [
    'id',
    'firstname',
    'surname',
    'details',
    // 'email',
    // 'phone',
    // 'adress',
    // 'postcode',
  ];
  // dataSource!: MatTableDataSource<Client>;
  dataSource!: MatTableDataSource<Client>;

  filterData(event: Event) {
    const e = (event.target as HTMLInputElement).value;
    this.dataSource.filter = e;
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.clients.getClients().subscribe({
      next: (clients) => {
        // console.log(clients);
        this.dataSource = new MatTableDataSource<Client>(clients);
        this.dataSource.paginator = this.paginator;

        console.log(this.dataSource);
      },
    });
  }
}
