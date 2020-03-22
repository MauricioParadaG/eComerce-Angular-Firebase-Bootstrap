import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from '../models/app-user';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from './user.service';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(private userService:UserService,
              private afireAuth: AngularFireAuth,
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

get appUser$(): Observable<AppUser> {
  return this.user$
  .pipe(switchMap(
    user => {
      if(user) return this.userService.get(user.uid).valueChanges();

      return of(null);

    })
  )     

}

}



