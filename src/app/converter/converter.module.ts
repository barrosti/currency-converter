import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ConverterComponent } from './components';
import { CurrencyService, ConverterService } from './services';
import { NumberDirective } from './directives';
import { ModalQuoteComponent } from './utils';
import { DatePipe } from './pipes';



@NgModule({
  declarations: [
  	ConverterComponent,
  	NumberDirective,
  	ModalQuoteComponent,
  	DatePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
  	ConverterComponent
  ],
  providers: [
  	CurrencyService,
    ConverterService
  ]
})
export class ConverterModule { }
