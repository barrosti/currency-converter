import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ModalQuoteComponent } from './modal-quote.component';
import { DatePipe } from '../pipes';
import { ConverterService } from '../services';

describe('ModalQuoteComponent', () => {
  let component: ModalQuoteComponent;
  let fixture: ComponentFixture<ModalQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ModalQuoteComponent, DatePipe
        ],
        providers: [
          ConverterService
        ],
        imports: [
          HttpClientModule
        ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
