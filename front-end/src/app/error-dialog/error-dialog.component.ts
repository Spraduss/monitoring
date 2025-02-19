import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css']
})
export class ErrorDialogComponent {
  /************************************************************************************************/
  /*                                         Constructor                                          */
  /************************************************************************************************/
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }
}

/**************************************************************************************************/
/*                                     Dialog data interface                                      */
/**************************************************************************************************/
export interface DialogData {
  message: string;
  redirect: string;
}
