
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ninth',
  imports: [FormsModule,CommonModule],
  templateUrl: './ninth.html',
  styleUrl: './ninth.scss'
})
export class Ninth {

  textboxes: string[] = [''];   // 一開始先有一個

  addTextbox() {
    this.textboxes.push('');    // 每次按鈕就加一個空字串
  }
}
