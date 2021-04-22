import {
	Directive,
	HostListener,
	ElementRef
} from '@angular/core';

import {
	NG_VALUE_ACCESSOR,
	ControlValueAccessor
} from '@angular/forms';

@Directive({
	selector: '[number]',
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: NumberDirective,
		multi: true
	}]
})
export class NumberDirective implements ControlValueAccessor {

	onTouched: any;
	onChange: any;

	constructor(private el: ElementRef) { }

	@HostListener('keyup', ['$event'])
	onKeyUp($event: any) {
		let value = $event.target.value;
		let indexDecimal = value.indexOf('.');

		value = value.replace(/[\D]/g, '');

		if (indexDecimal > 0) {
			value = value.substr(0, indexDecimal) + '.' + value.substr(indexDecimal);
		}

		$event.target.value = value;
		this.onChange(value);

	}

	// writeValue, registerOnChange, registerOnTouched

	registerOnChange(fn: any): void {
		this.onChange = fn;		
	}

	registerOnTouched(fn: any): void {		
		this.onTouched = fn;
	}

	writeValue(value: any): void {
		this.el.nativeElement.value = value;		
	}

}
