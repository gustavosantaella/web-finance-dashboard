import { Route } from "@angular/router";
import { RecordComponent } from "./record/record.component";

export const FinancesRoutes : Route[] = [
  {
    path: "",
    component: RecordComponent,
    pathMatch: 'full'
  }
]
