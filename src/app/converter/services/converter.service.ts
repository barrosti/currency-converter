import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import {
	Conversion,
	ConvertedResponse
} from '../models';

@Injectable({
	providedIn: 'root'
})
export class ConverterService {

	private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=a275c27b474d821857cad1da97a40ac6"; // mine
	//private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=eba7130a5b2d720ce43eb5fcddd47cc3";

	constructor(private http: HttpClient) { }

  /**
   * Make the call to the currency conversion API.
   *
   * @param Conversion conversion
   * @return Observable<ConvertedResponse>
   */
	converter(conversion: Conversion): Observable<any> {

		let params = `&base=${conversion.currencyFrom}&symbols=${conversion.currencyTo}`;
		return this.http.get(this.BASE_URL + params);
	}

  /**
   * Returns the quote to a given response.
   *
   * @param ConvertedResponse convertedResponse
   * @param Conversion conversion
   * @return number
   */
	currencyQuoteTo(convertedResponse: ConvertedResponse,
		conversion: Conversion): number {
		if (convertedResponse === undefined) {
			return 0;
		}
		return convertedResponse.rates[conversion.currencyTo];
	}
	
  /**
   * Returns the quote from a given response.
   *
   * @param ConvertedResponse convertedResponse
   * @param Conversion conversion
   * @return string
   */	
	currencyQuoteFrom(convertedResponse: ConvertedResponse,
		conversion: Conversion): string {
		if (convertedResponse === undefined) {
			return '0';
		}
		return (1 / convertedResponse.rates[conversion.currencyTo])
			.toFixed(4);
	}

  /**
   * Returns the date of the quote given a response.
   *
   * @param ConvertedResponse convertedResponse
   * @return string
   */
	dateCurrencyQuote(convertedResponse: ConvertedResponse): string {
		if (convertedResponse === undefined) {
			return '';
		}
		return convertedResponse.date;
	}


}
