import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Tenth } from './tenth/tenth';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterOutlet,RouterLinkActive,RouterLink,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Mid-tern-report-2';

  readonly dialog = inject(MatDialog);
  // 設全域變數

  showDialog() {
    const dialogRet = this.dialog.open(Tenth, {
      data: '要傳進去的值',
      width: '500px'
    });

    dialogRet.afterClosed().subscribe((res) => {
      if (res) {
        console.log(res)
      }
    })
  }
}
