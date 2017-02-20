import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { UserService } from '../service/user.service';
import { HttpClient } from '../service/http.service';
import { AuthService } from '../service/auth.service';

import { Admin } from '../admin_user/userAdmin';

@Injectable()

export class LoginAdminService{

    admin=Admin;

    constructor(private userService: UserService,private http: HttpClient, private authService: AuthService){}

    // loginIn(user:any){
    //     if(user.login==this.admin.login && user.password==this.admin.password) {
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }
    loginIn(user:any):any{
        return this.authService.signIn(user);

    }
}