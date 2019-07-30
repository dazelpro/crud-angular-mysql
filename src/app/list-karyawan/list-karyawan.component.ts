import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Component({
    selector: 'app-list-karyawan',
    templateUrl: './list-karyawan.component.html',
    styleUrls: ['./list-karyawan.component.css']
})
export class ListKaryawanComponent implements OnInit {

    dataKaryawan: Object;

    constructor(private rest: RestApiService) { }

    async ngOnInit() {
    try {
        const data = await this.rest.get(
            'http://localhost:8080/api-karyawan/karyawan'
        );
        this.dataKaryawan = data['data'];
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id){     
        await this.rest.delete(
        `http://localhost:8080/api-karyawan/hapus-karyawan/${id}`
        );
        this.ngOnInit();
    }

}