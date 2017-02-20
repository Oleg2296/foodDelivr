import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { UserService } from '../../service/user.service';
import { AddUserService } from './addUser.service';
import { User, users } from '../../admin_user/users';




@Component({
    moduleId: module.id,
    selector: 'add-usr',
    templateUrl: '../../../templetes/views/addUsr.html',
    styleUrls: ['../../../style/layout/users.css']
})

export class AddUserComponent implements OnInit{
    private users: User[] = users;

    constructor(private userService: UserService, private authService: AuthService, private addUserService: AddUserService){}

    addUser(log: any, pass: any, name: string, sname: string, email: any, phon: number){
        let user: User = new User(log, pass, name, sname, email, phon);
        this.addUserService.addUsr(user);
    }

    ngOnInit(){
        this.userService.checkAdmin();
    }

    delete(user: any){
        this.addUserService.delete(user);
    }

}