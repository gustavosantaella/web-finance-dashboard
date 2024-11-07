import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";


export enum EnumTypes  {
 SUCCESS = "success-snackbar",
 ERROR = "error-snackbar",
 WARNING = "warning-snackbar",
 INFO = "info-snackbar",
};




@Injectable({providedIn:'root'})
export class SnackbarService {

  constructor(private snack: MatSnackBar){}

  simple(message: string, type: EnumTypes){
  this.snack.open(message, undefined, {
    panelClass:[type],
    duration: 2000
  })
  }
}
