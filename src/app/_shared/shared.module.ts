import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { SearchInputComponent } from './search-input/search-input.component';
import { ButtonComponent } from './button/button.component';
import { RequestService } from './request.service';



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
    HttpClientModule
  ],
  exports: [
    ReactiveFormsModule,
    SearchInputComponent,
    ButtonComponent,
    CardModule
  ],
  providers: [RequestService]
})
export class SharedModule { }
