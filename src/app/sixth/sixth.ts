import { Component, ViewChild } from '@angular/core';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Example } from '../@services/example';

@Component({
  selector: 'app-sixth',
  imports: [MatTabsModule, RouterOutlet, RouterLink, FormsModule,
    MatTableModule, MatPaginatorModule, CommonModule],
  templateUrl: './sixth.html',
  styleUrl: './sixth.scss'
})
export class Sixth {
  constructor(private teema: Example) { }
  inputText!: string
  inputText2!: string
  required: boolean = false

  getInputText!: string
  getInputText2!: string
  getRequired: boolean = false

  items: { question: string, type: string, required: boolean }[] = []

  addItem() {
    // this.teema.inputText = this.inputText
    // this.getInputText = this.teema.inputText

    // this.teema.inputText2 = this.inputText2
    // console.log(this.teema.inputText2)
    // this.getInputText2 = this.teema.inputText2

    // this.teema.required = this.required
    // this.getRequired = this.teema.required

    if (this.inputText !== "" && this.inputText2 !== "") {
      this.items.push({
        question: this.getInputText,
        type: this.getInputText2,
        required: this.getRequired
      });
      this.inputText = "";
      this.inputText2 = "";
      this.required = false;
    }
  }

  @ViewChild('tabGroup') tabGroup!: MatTabGroup;

  goToNextTab() {
    if (this.tabGroup && this.tabGroup.selectedIndex !== undefined) {
      this.tabGroup.selectedIndex! += 1;
    }
  }

  textboxes: string[] = [''];   // 一開始先有一個

  addTextbox() {
    this.textboxes.push('');    // 每次按鈕就加一個空字串
  }






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
