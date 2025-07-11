import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-forth',
  imports: [FormsModule, MatTableModule, MatPaginatorModule],
  templateUrl: './forth.html',
  styleUrl: './forth.scss'
})
export class Forth {
  displayedColumns: string[] = ['position', 'names', 'state', 'start','endTime','result'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  names: string;
  position: string;
  state: string;
  start: string;
  endTime:any;
  result:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: "#1", names: '蘋果', state: "尚未開始", start: '2025/07/07',endTime:"2025/07/09",result:"前往" },
  { position: "#2", names: '香蕉', state: "進行中", start: '2025/07/07',endTime: "2025/07/10",result:"前往"},
  { position: "#3", names: '橘子', state: "已結束", start: '2025/07/07',endTime: "2025/07/10",result:"前往"},
  { position: "#4", names: '奇異果', state: "尚未開始", start: '2025/07/07',endTime: "2025/07/10",result:"前往"},
  { position: "#5", names: '西瓜', state: "尚未開始", start: '2025/07/07',endTime: "2025/07/10",result:"前往"},

];
