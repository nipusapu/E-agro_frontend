import{ Injectable } from '@angular/core';
import{ Http,Response,Headers,RequestOptions } from '@angular/http';
import{ Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import{ User } from '../user';

@Injectable()
export class RegisterService{

    constructor(private http: Http){

    }  

/*     getRegisterFromService():User[]{
        return[]
    } */

      
    addData(user:User){
        console.log(user);
        const body = JSON.stringify(user);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
      /*   headers.append('Access-Control-Allow-Origin','*'); */
        const options = new RequestOptions({ headers: headers});
        console.log(body);
        return this.http.post('/api/users', body, options);
        
    }


}