import { DatePipe } from './date.pipe';

describe('DatePipe', () => {
	it('create an instance', () => {
		const pipe = new DatePipe();
		expect(pipe).toBeTruthy();
	});

	it('should format 2021-04-21 to 21/04/2021', () => {
		const pipe = new DatePipe();
		expect(pipe.transform('2021-04-21')).toEqual('21/04/2021');
	});

});
