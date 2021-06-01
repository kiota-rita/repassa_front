import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenyLoginComponent } from './deny-login.component';

describe('DenyLoginComponent', () => {
  let component: DenyLoginComponent;
  let fixture: ComponentFixture<DenyLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenyLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DenyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
