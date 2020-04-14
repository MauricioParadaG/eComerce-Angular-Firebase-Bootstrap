import { Component, OnInit} from '@angular/core';
//import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { AppUser } from 'src/app/models/app-user';
import { ShoppingCartService } from 'src/app/services/firebaseCart/shopping-cart.service';
import { ShoppingCart } from 'src/app/models/shopping-cart';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit{
  public isCollapsed = true; // propiedad del html
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;

  constructor(
    private auth: AuthService,
    private shoppingCartService: ShoppingCartService
    ) {

    //afireAuth.authState.subscribe(user => this.user = user); Antigua forma de subscribe
   }

  logout(){
    this.auth.logout();
  }

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser =>this.appUser = appUser);

    this.cart$ =  await this.shoppingCartService.getCart();
 }

}
