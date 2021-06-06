import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissaoComponent } from './missao.component';

describe('MissaoComponent', () => {
  let component: MissaoComponent;
  let fixture: ComponentFixture<MissaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
