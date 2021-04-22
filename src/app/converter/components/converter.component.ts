import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Currency, Conversion, ConvertedResponse } from '../models';
import { CurrencyService, ConverterService } from '../services';

@Component({
	selector: 'app-converter',
	templateUrl: './converter.component.html',
	styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

	currencies: Currency[];
	conversion: Conversion;
	hasError: boolean;
	convertedResponse: ConvertedResponse;

	@ViewChild("conversionForm", { static: true })
	conversionForm: NgForm;

	constructor(
		private currencyService: CurrencyService, 
		private converterService: ConverterService) { }

	ngOnInit(): void {
		this.currencies = this.currencyService.listAll();
		this.init();
	}

	init(): void {
		this.conversion = new Conversion('EUR','USD',null);
		this.hasError = false;
	}

	converter(): void {
		if(this.conversionForm.form.valid){
			//alert('Converting: ' + JSON.stringify(this.conversion));
			this.converterService
				.converter(this.conversion)
				.subscribe(
					response => this.convertedResponse = response,
					error => this.hasError = true
				);
		}
	}

}
