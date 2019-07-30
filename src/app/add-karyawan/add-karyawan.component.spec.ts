import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKaryawanComponent } from './add-karyawan.component';

describe('AddKaryawanComponent', () => {
  let component: AddKaryawanComponent;
  let fixture: ComponentFixture<AddKaryawanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddKaryawanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKaryawanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
