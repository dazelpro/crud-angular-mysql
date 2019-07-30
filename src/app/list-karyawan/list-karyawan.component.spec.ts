import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKaryawanComponent } from './list-karyawan.component';

describe('ListKaryawanComponent', () => {
  let component: ListKaryawanComponent;
  let fixture: ComponentFixture<ListKaryawanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListKaryawanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKaryawanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
