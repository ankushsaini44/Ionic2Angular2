import {Component} from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder,  ControlGroup, Validators, AbstractControl} from '@angular/common';
import {NavController} from 'ionic-angular';
import {User} from '../../models/user_model';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {Observable, Subscriber } from 'rxjs/Rx';
import '../../../node_modules/rxjs/Rx'


@Component({
  selector: 'login-form',
  templateUrl: 'build/pages/user/login.html',
  directives: [FORM_DIRECTIVES]
})

export class LoginForm {

    userForm: ControlGroup;
    username: AbstractControl;
    password: AbstractControl;
    postValue: any;
    postJSON: any;
    res: any;
    loggedin: any;

    constructor(private navController: NavController, private fb: FormBuilder, private http: Http, private loginService: User) {

        this.userForm = fb.group({
            'username': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])]
        });

        this.username = this.userForm.controls['username'];
        this.password = this.userForm.controls['password'];
    }

    onSubmit(value: string): void {
        if(this.userForm.valid) {
          this.postValue = JSON.stringify(value)
          this.postJSON = JSON.parse(this.postValue)
          var body = "username=" + this.postJSON.username + "&password=" + this.postJSON.password;
          var headers = new Headers();

          headers.append('Content-Type', 'application/x-www-form-urlencoded');

          this.http
          .post('http://localhost:3000/api/v1/users/sign_in.json',
            body, {
              headers: headers
            })
          .map(response => response.json())
          .subscribe(
            data => this.res = data
            )
          console.log(this.res)
        }
    }
    logIn() {
        this.loginService.setData({ attr: 'true' });
      }
}
