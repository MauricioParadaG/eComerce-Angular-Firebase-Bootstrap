import { Component } from '@angular/core';
//import * as firebase from 'firebase/app';

// import { AngularFireAuthModule } from "@angular/fire/auth";
//import { AngularFireAuth } from '@angular/fire/auth';
// service
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthService ) { }

  login(){
    this.auth.login()
  }

}
