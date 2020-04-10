import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/firebase/product.service';
import { Product } from 'src/app/models/products';
import { switchMap } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/categories/category.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/firebaseCart/shopping-cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  category: string;
  products: Product[] = [];
  filteredProducts: Product[] = [] ;
  
  cart: any;
  subscription:Subscription; 

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService
  ) {
    productService.getProducts().subscribe(products => { this.products = products; 

    route.queryParamMap.subscribe(params => {
      this.category = params.get('category');

    this.filteredProducts = (this.category) ?
      this.products.filter(p => p.category === this.category) :
      this.products;

    });
    
  });
    
  }

  async ngOnInit() {
    this.subscription = (await this.shoppingCartService.getCart()).snapshotChanges().subscribe(cart => {
      this.cart = cart.payload.val();
     // console.log(this.cart.items);
     // console.log(this.cart);
    });
    // console.log(this.subscription);
    
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  /*
  private populateProducts() {
    this.productService.getProducts()
    .pipe(
      switchMap(products => {
        this.products = products;
        
      })
    )
    ;
  }
*/


}
