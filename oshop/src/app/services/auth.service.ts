import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(private afireAuth: AngularFireAuth) { 
    this.user$ = afireAuth.authState;
  }
login(){
  this.afireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
}

logout(){
  this.afireAuth.auth.signOut();
}

}
