import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { CommonModule }           from '@angular/common';
import { ListKaryawanComponent }  from './list-karyawan/list-karyawan.component';
import { AddKaryawanComponent }   from './add-karyawan/add-karyawan.component';
import { EditKaryawanComponent }  from './edit-karyawan/edit-karyawan.component';

const appRoutes: Routes = [
  { path: '', component:  ListKaryawanComponent},
  { path: 'add-karyawan',  component:  AddKaryawanComponent},
  { path: 'edit-karyawan/:id',  component:  EditKaryawanComponent},
  { path: '**',   redirectTo: ''}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }