import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCurrencyComponent } from './update-currency.component';

describe('UpdateCurrencyFormComponent', () => {
  let component: UpdateCurrencyComponent;
  let fixture: ComponentFixture<UpdateCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
