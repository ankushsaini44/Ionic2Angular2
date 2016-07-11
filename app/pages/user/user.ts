import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SignUpForm} from './signup.component';
import {LoginForm} from './login.component';

@Component({
  templateUrl: 'build/pages/user/user.html',
  directives: [ SignUpForm, LoginForm ]
})

export class UserPage {
  constructor(private navController: NavController) {
  }
}
