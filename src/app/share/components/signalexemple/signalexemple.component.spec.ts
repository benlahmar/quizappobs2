import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalexempleComponent } from './signalexemple.component';

describe('SignalexempleComponent', () => {
  let component: SignalexempleComponent;
  let fixture: ComponentFixture<SignalexempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalexempleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalexempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
