import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import { Router } from '@angular/router';

//users, admins
import { Admin } from '../admin_user/userAdmin';
import { User, users } from '../admin_user/users';

@Injectable()

export class HttpClient{
    private token: string;
    private admin:any = Admin;
    private users: User[] = users;

    constructor(private http: Http, private router: Router){}

    // createAuthorizationHeader(headers:Headers) {
    //     if(!this.token)
    //         this.token=sessionStorage.getItem('admin');
    //     headers.append('Authorization', this.token);
    // }

    post(url: string, data: any) {
        let user = data;
            if(user.login==this.admin.login && user.password==this.admin.password) {
                return true;
            }else{
                return false;
            }
        // let headers = new Headers();
        // this.createAuthorizationHeader(headers);
        // return this.http.post(url, data, {
        //     headers: headers
        // });
    }

    delete(user: any){
        for(let i in this.users){
            if(user.name == this.users[i].name){
                this.users.splice(i, 1);
            }
        }
    }
    addUser(user: User){
        console.log(user);
        this.users.push(user);
    }

    logOut(){
        if(sessionStorage.getItem('currentAdmin')){
            sessionStorage.removeItem('currentAdmin');
        }
        this.router.navigate(['loginAdmin']);
    }
    //
    // setToken(token: string){
    //     localStorage.setItem('currentUser', token);
    //     this.token=token;
    // }
    //
    // getToken():string{
    //     return this.token;
    // }
    // removeToken(){
    //     this.token="";
    //     localStorage.removeItem("currentUser");
    // }

}