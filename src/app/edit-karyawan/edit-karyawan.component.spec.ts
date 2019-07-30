import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKaryawanComponent } from './edit-karyawan.component';

describe('EditKaryawanComponent', () => {
  let component: EditKaryawanComponent;
  let fixture: ComponentFixture<EditKaryawanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditKaryawanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKaryawanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
