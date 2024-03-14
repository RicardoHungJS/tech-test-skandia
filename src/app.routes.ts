import { Routes } from '@angular/router';
import { FinancialPlanComponent } from './app/financial-plan/financial-plan.component';

export const routes: Routes = [
  {
    path: '',
    component: FinancialPlanComponent,
    data: {
      label: 'Plan Financiero Digital',
    },
  },
];
