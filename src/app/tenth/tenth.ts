import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
@Component({
  selector: 'app-tenth',
  imports: [MatDialogTitle, MatDialogActions, MatDialogContent],
  templateUrl: './tenth.html',
  styleUrl: './tenth.scss'
})
export class Tenth {
  readonly dailogRet = inject(MatDialogRef<Tenth>);
  readonly data = inject<any>(MAT_DIALOG_DATA);

  N() {
    this.dailogRet.close();
  };

  Y() {
    let returnData = 'banira';
    this.dailogRet.close(returnData);
  };
}
