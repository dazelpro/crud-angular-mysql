import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-edit-karyawan',
    templateUrl: './edit-karyawan.component.html',
    styleUrls: ['./edit-karyawan.component.css']
})
export class EditKaryawanComponent implements OnInit {
    edit    : Object;  
    nip     : any;

    constructor(
        private rest: RestApiService,
        private activatedRoute: ActivatedRoute,
        private router: Router
        ) 
    {this.nip = activatedRoute.snapshot.url[1].path;}

    async ngOnInit() {
        const nip = this.nip
        const data = await this.rest.get(
            `http://localhost:8080/api-karyawan/karyawan/${nip}`
        );    
        this.edit = data['data'];
    }

    async editDataKaryawan() {
        try{        
            await this.rest.put(
                'http://localhost:8080/api-karyawan/edit-karyawan',
                {
                    nip     : this.nip,
                    nama    : this.edit['nama'],
                    alamat  : this.edit['alamat'],
                    jabatan : this.edit['jabatan']
                }
            );
        this.router.navigate(['list-karyawan']); 
        } catch (error){
            console.log(error);
        }
    }

}