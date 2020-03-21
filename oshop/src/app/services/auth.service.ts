import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(private afireAuth: AngularFireAuth,
              private route: ActivatedRoute) { 
    this.user$ = afireAuth.authState;
  }
login(){
  let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/' ;
  localStorage.setItem('returnUrl', returnUrl);
  this.afireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
}

logout(){
  this.afireAuth.auth.signOut();
}

}
