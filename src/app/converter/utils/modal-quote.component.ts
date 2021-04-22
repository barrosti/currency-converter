import {
	Component, OnInit, Input, Output, EventEmitter
} from '@angular/core';

import { ConvertedResponse, Conversion } from '../models';
import { ConverterService } from '../services';

@Component({
	selector: 'modal-quote',
	templateUrl: './modal-quote.component.html',
	styleUrls: ['./modal-quote.component.css']
})
export class ModalQuoteComponent implements OnInit {

	@Input() id: string;
	@Input() convertedResponse: ConvertedResponse;
	@Input() conversion: Conversion = new Conversion();
	@Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

	constructor(private converterService: ConverterService) { }

	ngOnInit(): void {
	}


	newSearch() {
		this.onConfirm.emit();
	}


	get convertedValue(): string {
		if (this.convertedResponse === undefined) {
			return '0';
		}

		return (this.conversion.value *
			this.convertedResponse.rates[this.conversion.currencyTo])
			.toFixed(2);
	}

	get quoteTo(): number {
		return this.converterService.currencyQuoteTo(this.convertedResponse, this.conversion);
	}

	get quoteFrom(): string {
		return this.converterService.currencyQuoteFrom(this.convertedResponse, this.conversion);
	}

	get dateQuote(): string {
		return this.converterService.dateCurrencyQuote(this.convertedResponse);
	}

}
