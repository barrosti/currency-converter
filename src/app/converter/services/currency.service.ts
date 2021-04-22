import { Injectable } from '@angular/core';

import { Currency } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

 private currencies: Currency[];

  constructor() { }

 private currenciesObj = [ //http://fixer.io
	{ "initials": "AUD", "description": "Australian Dollar" },
	{ "initials": "BGN", "description": "Bulgarian Lev" },
	{ "initials": "BRL", "description": "Brazilian Real" },
	{ "initials": "CAD", "description": "Canadian Dollar" },
	{ "initials": "CHF", "description": "Swiss Franc" },
	{ "initials": "CNY", "description": "Chinese Yuan" },
	{ "initials": "CZK", "description": "Czech Republic Crown" },
	{ "initials": "DKK", "description": "Danish Crown" },
	{ "initials": "EUR", "description": "Euro" },
	{ "initials": "GBP", "description": "British Pound" },
	{ "initials": "HKD", "description": "Hong Kong Dollar" },
	{ "initials": "HRK", "description": "Croatian Kuna" },
	{ "initials": "HUF", "description": "Hungarian Guilder" },
	{ "initials": "IDR", "description": "Indonesian Rupee" },
	{ "initials": "ILS", "description": "Israeli New Shekel" },
	{ "initials": "INR", "description": "Indian Rupee" },
	{ "initials": "JPY", "description": "Japanese Yen" },
	{ "initials": "KRW", "description": "South Korean Won" },
	{ "initials": "MXN", "description": "Mexican Peso" },
	{ "initials": "MYR", "description": "Malaysia Ringgit" },
	{ "initials": "NOK", "description": "Norway Crown" },
	{ "initials": "NZD", "description": "New Zealand Dollar" },
	{ "initials": "PHP", "description": "Philippine Peso" },
	{ "initials": "PLN", "description": "Złoty Poland" },
	{ "initials": "RON", "description": "Romanian Leu" },
	{ "initials": "RUB", "description": "Belarus Ruble" },
	{ "initials": "SEK", "description": "Sweden Crown" },
	{ "initials": "SGD", "description": "Singapore Dollar" },
	{ "initials": "THB", "description": "Baht Thailand" },
	{ "initials": "TRY", "description": "Turkish Lira" },
	{ "initials": "USD", "description": "United States Dollar" }, 
	{ "initials": "ZAR", "description": "Rand South Africa" }
  ];

  listAll(): Currency[] {
  	if (this.currencies) {
  		return this.currencies;
  	} 
  	
  	this.currencies = [];

  	for (let currencyObj of this.currenciesObj) {
  		let currency: Currency = new Currency();
  		Object.assign(currency, currencyObj);
  		this.currencies.push(currency);
  	}

  	return this.currencies;
  }

}
