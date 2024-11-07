import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FinanceRecordService } from 'src/app/services/finance/record.service';
import {
  EnumTypes,
  SnackbarService,
} from 'src/app/services/shared/snackbar.service';

@Component({
  selector: 'app-record',
  standalone: false,
  templateUrl: './record.component.html',
  styleUrl: './record.component.scss',
})
export class RecordComponent {

  public form :FormGroup<any>;

  public loading: boolean = false;

  constructor(
    private snackbar: SnackbarService,
    private recordService: FinanceRecordService,
    private formBuilder: FormBuilder
  ) {
     this.form = this.createForm()
  }

  private createForm(){
    return this.formBuilder.group({
      type:['I', [Validators.required]],
      amount:[0, [Validators.required]],
      date:[ new Date(), [Validators.required]],
    })
  }



  add() {
    if(this.loading){
      this.snackbar.simple('Wait a moment', EnumTypes.INFO);
      return;
    }
    this.loading = true;

    this.recordService
      .add()
      .then((data) => {
        this.snackbar.simple('success', EnumTypes.SUCCESS);
      })
      .catch((error) => {
        this.snackbar.simple('Error ocurred', EnumTypes.ERROR);
      })
      .finally(() => {
        this.loading = !this.loading;
      });
  }
}
