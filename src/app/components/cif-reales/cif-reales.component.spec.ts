import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CifRealesComponent } from './cif-reales.component';

describe('CifRealesComponent', () => {
  let component: CifRealesComponent;
  let fixture: ComponentFixture<CifRealesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CifRealesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CifRealesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
