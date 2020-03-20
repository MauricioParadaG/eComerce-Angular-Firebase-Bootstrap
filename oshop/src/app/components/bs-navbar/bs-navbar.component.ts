import { Component} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  user: firebase.User;
  constructor(private afireAuth: AngularFireAuth) {
    afireAuth.authState.subscribe(user => this.user = user);
   }

  logout(){
    this.afireAuth.auth.signOut();
  }

}
