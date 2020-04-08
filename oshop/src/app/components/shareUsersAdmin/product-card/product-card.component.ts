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
  constructor(private shoppingCartService : ShoppingCartService) { }

  addToCart(product: Product){
    this.shoppingCartService.addToCart(product);
  }

  ngOnInit(): void {
  }

}
