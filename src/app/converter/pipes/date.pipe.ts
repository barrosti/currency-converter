import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'date'
})
export class DatePipe implements PipeTransform {

	/**
	* Apply date format
	*
	* @param string dateEn in format yyyy-mm-dd
	* @return string date in format dd/mm/yyyy
	*/

	transform(dateEn: string): string {
		if (!dateEn) {
			return '';
		}

		const dateArr = dateEn.split('-');

		if( dateArr.length !== 3 ){
			return dateEn;
		}

		return dateArr[2] + '/' + dateArr[1] + '/' + dateArr[0];
	}


	/*
		transform(value: unknown, ...args: unknown[]): unknown {
			return null;
		}
	*/	

}
