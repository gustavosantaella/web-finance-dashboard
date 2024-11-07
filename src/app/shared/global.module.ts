import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { provideNativeDateAdapter } from "@angular/material/core";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { TablerIconsModule } from "angular-tabler-icons";
import { MaterialModule } from "../material.module";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    TablerIconsModule,
  ],
  exports:[MaterialModule, TablerIconsModule, CommonModule],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
    provideNativeDateAdapter()
  ],
})
export class GloblaModule {}
