import { Routes } from '@angular/router';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import { FinanceModule } from './finance/finance.module';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: AppDashboardComponent,
    data: {
      title: 'Starter Page',
    },
  },
  {
    path: 'finance',
    loadChildren: () => FinanceModule,
    title: 'Finances',
  },
];
