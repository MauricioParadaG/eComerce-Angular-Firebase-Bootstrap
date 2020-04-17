import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/firebaseCart/shopping-cart.service';
import { Product } from 'src/app/models/products';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit {
  @Input('product') product: Product;
  @Input('shopping-cart') shoppingCart;

  constructor(private shoppingCartService : ShoppingCartService) { }

  addToCart(){
    this.shoppingCartService.addToCart(this.product);
  }

  removeFromCart(){
    this.shoppingCartService.removeFromCart(this.product);
  }

  ngOnInit(): void {
  }

}
