import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { UserService } from '../../service/user.service';
import { HttpClient } from '../../service/http.service';
import { AuthService } from '../../service/auth.service';
import { User, users } from '../../admin_user/users';


@Injectable()

export class AddUserService {


    constructor(private userService: UserService, private http: HttpClient, private authService: AuthService){
    }

    addUsr(user: User){
        this.authService.addUser(user);
    }

    delete(user: any){
        this.authService.delete(user);
    }

}