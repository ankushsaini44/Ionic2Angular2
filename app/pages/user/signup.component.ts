import {Component} from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder,  ControlGroup, Validators, AbstractControl} from '@angular/common';
import {NavController} from 'ionic-angular';
import {User} from '../../models/user_model';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import '../../../node_modules/rxjs/Rx'


@Component({
  selector: 'sign-up-form',
  templateUrl: 'build/pages/user/signup.html',
  directives: [FORM_DIRECTIVES]
})

export class SignUpForm {

    signUpForm: ControlGroup;
    username: AbstractControl;
    password: AbstractControl;
    email: AbstractControl;
    confirmPassword: AbstractControl;
    postValue: any;
    postJSON: any;
    res: any;

    constructor(private navController: NavController, private fb: FormBuilder, private http: Http) {
        this.signUpForm = fb.group({
            'username': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
            'confirmPassword': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
            'email': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
        });

        this.username = this.signUpForm.controls['username'];
        this.password = this.signUpForm.controls['password'];
        this.confirmPassword = this.signUpForm.controls['confirmPassword']
        this.email = this.signUpForm.controls['email']
    }

    onSubmit(value: string): void {
        if(this.signUpForm.valid) {
          this.postValue = JSON.stringify(value)
          this.postJSON = JSON.parse(this.postValue)

          var body = {"user" : {"username" : this.postJSON.username, "password" : this.postJSON.password, "email" : this.postJSON.email, "password_confirmation" : this.postJSON.confirmPassword}}
          var headers = new Headers();

          headers.append('Content-Type', 'application/json');

          this.http
          .post('http://localhost:3000/api/v1/users.json',
            body, {
              headers: headers
            })
          .map(response => response.json())
          .subscribe(
            data => this.res = data
            )
            if(this.res.status == '201') {
              console.log(this.res.status)
              /** pull the sign up form off and show the login screen */
              /** display login screen */
            }
            else {
              /** keep the sign up form up and display the error */
              console.log(this.res.status)
        }
      }
    }
}
