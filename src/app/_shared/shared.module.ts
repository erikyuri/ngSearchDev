import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SearchInputComponent } from './search-input/search-input.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    SearchInputComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
  ],
  exports: [
    ReactiveFormsModule,
    SearchInputComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
