import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCurrencyFormComponent } from './update-currency-form.component';

describe('UpdateCurrencyFormComponent', () => {
  let component: UpdateCurrencyFormComponent;
  let fixture: ComponentFixture<UpdateCurrencyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCurrencyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCurrencyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
