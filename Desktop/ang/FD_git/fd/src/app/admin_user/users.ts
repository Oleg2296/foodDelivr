export class User {
    login: string;
    password: any;
    name: string;
    sname: string;
    email: any;
    phone: number;
    constructor(log: any, pass: any, name: string, sname: string, email: any, phon: number){
        this.login = log;
        this.password = pass;
        this.name = name;
        this.sname = sname;
        this.email = email;
        this.phone = phon;
    }
}

export let users: User[] = [
    new User('Qwe1', '123','Oleh','Clasnyi','otakot@gmail.com',38023331233),
    new User('Qwe2', '123','Vasya','Clasnyi','otakot@gmail.com',38023331233),
    new User('Qwe3', '123','Petya','Clasnyi','otakot@gmail.com',38023331233),
    new User('Qwe4', '123','Yura','Clasnyi','otakot@gmail.com',38023331233),
    new User('Qwe5', '123','Slava','Clasnyi','otakot@gmail.com',38023331233),
    new User('Qwe6', '123','Dido','Clasnyi','otakot@gmail.com',38023331233),
    new User('Qwe7', '123','Paren','Clasnyi','otakot@gmail.com',38023331233),
    new User('Qwe8', '123','Zola','Clasnyi','otakot@gmail.com',38023331233),
    new User('Qwe9', '123','Pochka','Clasnyi','otakot@gmail.com',38023331233)
]


