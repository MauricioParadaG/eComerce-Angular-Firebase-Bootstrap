import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/models/order';
import { Shipping } from 'src/app/models/shipping';
import { ShoppingCart } from 'src/app/models/shopping-cart';
import { OrderService } from 'src/app/services/firebaseOrder/order.service';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit {
  @Input('cart') cart:ShoppingCart;
    
  shipping = new Shipping();

  constructor(private orderService: OrderService) { }

  placeOrder(){
    let order = new Order (this.shipping, this.cart);
    this.orderService.placeOrder(order);
   }

  ngOnInit(): void {
  }

}
