import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class FinanceRecordService{

  async add(): Promise<any>{
    return new Promise(resolve => setTimeout(resolve, 3000));
  }
}
