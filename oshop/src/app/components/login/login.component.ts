import { Component } from '@angular/core';
import * as firebase from 'firebase/app';

// import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private afireAuth: AngularFireAuth ) { }

  login(){
    this.afireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }

}
