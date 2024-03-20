import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ClientsService } from '../../../core/services/clients.service';
import { Client } from '../../../core/models/clients.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrl: './clients-table.component.scss',
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
