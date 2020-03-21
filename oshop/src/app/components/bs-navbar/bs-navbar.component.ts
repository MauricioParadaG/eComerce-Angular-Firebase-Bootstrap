import { Component} from '@angular/core';
//import { AngularFireAuth } from '@angular/fire/auth';
//import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  

  constructor(public auth: AuthService) {
    
    //afireAuth.authState.subscribe(user => this.user = user); Antigua forma de subscribe
   }

  logout(){
    this.auth.logout();
  }

}
