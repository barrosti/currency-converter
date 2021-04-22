import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ConverterComponent } from './converter.component';
import { CurrencyService, ConverterService } from '../services';
import { NumberDirective } from '../directives';
import { DatePipe } from '../pipes';
import { ModalQuoteComponent } from '../utils';

describe('ConverterComponent', () => {
  let component: ConverterComponent;
  let fixture: ComponentFixture<ConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ConverterComponent,
        NumberDirective,
        DatePipe,
        ModalQuoteComponent
      ],
      providers: [
        CurrencyService,
        ConverterService
      ],
      imports: [
        FormsModule,
        HttpClientModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
