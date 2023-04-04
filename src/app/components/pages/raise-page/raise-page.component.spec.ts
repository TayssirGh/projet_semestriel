import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaisePageComponent } from './raise-page.component';

describe('RaisePageComponent', () => {
  let component: RaisePageComponent;
  let fixture: ComponentFixture<RaisePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaisePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaisePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
