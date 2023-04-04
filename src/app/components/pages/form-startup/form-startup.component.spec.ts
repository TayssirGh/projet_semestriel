import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStartupComponent } from './form-startup.component';

describe('FormStartupComponent', () => {
  let component: FormStartupComponent;
  let fixture: ComponentFixture<FormStartupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormStartupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormStartupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
