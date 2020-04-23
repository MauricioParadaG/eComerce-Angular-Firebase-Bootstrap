import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Order } from 'src/app/models/order';
import { Shipping } from 'src/app/models/shipping';
import { ShoppingCart } from 'src/app/models/shopping-cart';
import { OrderService } from 'src/app/services/firebaseOrder/order.service';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;
  userId: string;
  userSubscription: Subscription;
  shipping = new Shipping();

  constructor(
    private orderService: OrderService,
    private authService: AuthService,
    private router: Router,
  ) { }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key]);
  }

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
