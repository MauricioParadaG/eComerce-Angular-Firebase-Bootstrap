import { Component} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  user$: Observable<firebase.User>;

  constructor(private afireAuth: AngularFireAuth) {
    this.user$ = afireAuth.authState;
    //afireAuth.authState.subscribe(user => this.user = user); Antigua forma de subscribe
   }

  logout(){
    this.afireAuth.auth.signOut();
  }

}
