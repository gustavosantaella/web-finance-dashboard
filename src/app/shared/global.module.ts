import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from '../material.module';
import { TranslocoRootModule } from './translation';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    TablerIconsModule,
    FormsModule,
    ReactiveFormsModule,
    TranslocoRootModule,
  ],
  exports: [
    MaterialModule,
    TablerIconsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
    provideNativeDateAdapter(),
  ],
})
export class GloblaModule {}
