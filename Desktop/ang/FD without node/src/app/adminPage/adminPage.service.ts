import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
//services
import { UserService } from '../service/user.service';
import { HttpClient } from '../service/http.service';
//users


@Injectable()

export class AdminPageService {



    constructor(private userService: UserService, private http: HttpClient){
    }



}