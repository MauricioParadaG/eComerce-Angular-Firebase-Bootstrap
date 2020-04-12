import { Component, OnInit} from '@angular/core';
//import { AngularFireAuth } from '@angular/fire/auth';
//import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from 'src/app/services/auth.service';
import { AppUser } from 'src/app/models/app-user';
import { ShoppingCartService } from 'src/app/services/firebaseCart/shopping-cart.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit{
  public isCollapsed = true; // propiedad del html
  appUser: AppUser;
  shoppingCartItemCount: number;

  constructor(
    private auth: AuthService,
    private shoppingCartService: ShoppingCartService
    ) {
    auth.appUser$.subscribe(appUser =>this.appUser = appUser);
    //afireAuth.authState.subscribe(user => this.user = user); Antigua forma de subscribe
   }

  logout(){
    this.auth.logout();
  }

  async ngOnInit() {
    let cart$ =  await this.shoppingCartService.getCart();
    
    cart$.valueChanges().subscribe(cart => {
      this.shoppingCartItemCount = 0;
      for (let productId in cart.items)
        this.shoppingCartItemCount += cart.items[productId].quantity;
      
    });

  }

}
