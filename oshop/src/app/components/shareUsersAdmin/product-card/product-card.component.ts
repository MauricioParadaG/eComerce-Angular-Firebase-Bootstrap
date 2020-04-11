import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/products';
import { ShoppingCartService } from 'src/app/services/firebaseCart/shopping-cart.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product: Product;
  @Input('shopping-cart') shoppingCart;
  
  constructor(private shoppingCartService : ShoppingCartService) { }

  addToCart(){
    this.shoppingCartService.addToCart(this.product);
  }

  removeFromCart(){
    this.shoppingCartService.removeFromCart(this.product);
  }

  getQuantity(){
    // console.log(this.shoppingCart)
    if (!this.shoppingCart) return 0;
   
    let item = this.shoppingCart.items[this.product.key];
    // console.log( "item " + item);
    return item ? item.quantity: 0 ;
  }

  ngOnInit(): void {
  }

}
