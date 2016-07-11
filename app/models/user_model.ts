import { Injectable } from '@angular/core';
@Injectable()
export class User {

  constructor(
    public id: number,
    public name: string,
    public username: string,
    public user_password: string,
    public logged_in: boolean,
    public email: string,
    public loggedIn: boolean
  ) {  }

setData(loggedIn:any) {
  this.loggedIn = loggedIn;
}
}
