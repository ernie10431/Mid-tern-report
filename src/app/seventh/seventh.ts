import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-seventh',
  imports: [FormsModule, MatTableModule, MatPaginatorModule,RouterLink],
  templateUrl: './seventh.html',
  styleUrl: './seventh.scss'
})
export class Seventh {
  displayedColumns: string[] = ['position', 'names', 'start', 'result'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  names: string;
  position: string;
  start: string;
  result: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: "#1", names: '蘋果', start: '2025/07/07', result: "前往" },
  { position: "#2", names: '香蕉', start: '2025/07/07', result: "前往" },
  { position: "#3", names: '橘子', start: '2025/07/07', result: "前往" },
  { position: "#4", names: '奇異果', start: '2025/07/07', result: "前往" },
  { position: "#5", names: '西瓜', start: '2025/07/07', result: "前往" },

];
