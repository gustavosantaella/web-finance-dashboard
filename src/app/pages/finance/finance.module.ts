import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GloblaModule } from 'src/app/shared/global.module';
import { FinancesRoutes } from './finance.routing';
import { RecordComponent } from './record/record.component';

@NgModule({
  declarations: [RecordComponent],
  exports: [RecordComponent],
  imports: [GloblaModule, RouterModule.forChild(FinancesRoutes)],
})
export class FinanceModule {}
