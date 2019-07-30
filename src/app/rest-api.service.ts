import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RestApiService {

    constructor(private http: HttpClient) { }

    get(link: string){
        return this.http.get(link).toPromise();
    }

    post(link: string, body:any){
        return this.http.post(link, body).toPromise();
    }

    delete(link: string){
        return this.http.delete(link).toPromise();
    }

    put(link: string, body:any){
        return this.http.put(link, body).toPromise();
    }
}