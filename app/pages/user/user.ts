import {Component, DynamicComponentLoader, ElementRef, ComponentRef, ViewContainerRef, Injector} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SignUpForm} from './signup.component';
import {LoginForm} from './login.component';

@Component({
  templateUrl: 'build/pages/user/user.html',
  providers: [ SignUpForm, LoginForm ]
})

export class UserPage {
  setForm: any;
  component: any;

  constructor(private navController: NavController, public dcl: DynamicComponentLoader, private _elementRef: ElementRef, public vcr: ViewContainerRef, public _inject: Injector) {
    this.setForm = "";
  }

  displaySignUpForm(){
    console.log("displaying signup form")
    this.setForm = 'Sign Up Here'
    this.component = this.dcl.loadAsRoot(SignUpForm, '#form', this._inject);
      }

  displayLoginForm(){
    console.log("displaying login form")
    this.setForm = 'Login Here'
    this.component = this.dcl.loadAsRoot(LoginForm, '#form', this._inject);
      }
}
