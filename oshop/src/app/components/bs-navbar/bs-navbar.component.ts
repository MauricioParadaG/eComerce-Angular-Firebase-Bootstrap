import { Component} from '@angular/core';
//import { AngularFireAuth } from '@angular/fire/auth';
//import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from 'src/app/services/auth.service';
import { AppUser } from 'src/app/models/app-user';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  public isCollapsed = true; // propiedad del html
  appUser: AppUser;

  constructor(private auth: AuthService) {
    auth.appUser$.subscribe(appUser =>this.appUser = appUser);
    //afireAuth.authState.subscribe(user => this.user = user); Antigua forma de subscribe
   }

  logout(){
    this.auth.logout();
  }

}
