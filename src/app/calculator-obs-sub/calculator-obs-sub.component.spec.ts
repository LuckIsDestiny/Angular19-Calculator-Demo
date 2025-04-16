import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorObsSubComponent } from './calculator-obs-sub.component';

describe('CalculatorObsSubComponent', () => {
  let component: CalculatorObsSubComponent;
  let fixture: ComponentFixture<CalculatorObsSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorObsSubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorObsSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
