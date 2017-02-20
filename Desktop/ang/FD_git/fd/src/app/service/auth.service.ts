import { Injectable } from '@angular/core'
import 'rxjs/add/operator/toPromise';


import { User, users } from '../admin_user/users';
import { HttpClient } from './http.service';

@Injectable()

export class AuthService {

    constructor(private http: HttpClient){}

    signIn(user: any){
        return this.http.post("url", user);

    }

    // signIn(user: any): Promise <any>{
    //     return this.http.post("url", user).toPromise()
    //         .then(
    //             (data: any) => {
    //                 var obj=JSON.parse(data._body);
    //                 this.http.setToken(obj.token);
    //             })
    // }

    addUser(user: User){
        this.http.addUser(user);
    }

    delete(user: any){
        this.http.delete(user)
    }


}