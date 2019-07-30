import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListKaryawanComponent } from './list-karyawan/list-karyawan.component';
import { AddKaryawanComponent } from './add-karyawan/add-karyawan.component';
import { EditKaryawanComponent } from './edit-karyawan/edit-karyawan.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListKaryawanComponent,
    AddKaryawanComponent,
    EditKaryawanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
