import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../rest-api.service';

@Component({
    selector: 'app-add-karyawan',
    templateUrl: './add-karyawan.component.html',
    styleUrls: ['./add-karyawan.component.css']
})
export class AddKaryawanComponent implements OnInit {

    constructor(private router: Router,private rest: RestApiService) { }
    nip     = '';
    nama    = '';
    alamat  = '';
    jabatan = '';

    ngOnInit() {
    }

    async saveDataKaryawan(){
        try{        
            const data = await this.rest.post(
                'http://localhost:8080/api-karyawan/add-karyawan',
                {
                    nip     : this.nip,
                    nama    : this.nama,
                    alamat  : this.alamat,
                    jabatan : this.jabatan
                }
            );
        this.router.navigate(['list-karyawan']); 
        } catch (error){
            console.log(error);
        }
    }

}