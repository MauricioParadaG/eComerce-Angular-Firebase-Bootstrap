import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/firebase/product.service';
import { Product } from 'src/app/models/products';
import { switchMap } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/categories/category.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/firebaseCart/shopping-cart.service';
import { ShoppingCart } from 'src/app/models/shopping-cart';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  category: string;
  products: Product[] = [];
  filteredProducts: Product[] = [] ;
  
  cart$:Observable<ShoppingCart>;


  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService
  ) {}
  
  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
    this.populateProducts();
  }

  private populateProducts(){
      this.productService.getProducts().subscribe(products => { this.products = products; 

      this.route.queryParamMap.subscribe(params => {
        this.category = params.get('category');
  
        this.applyFilter();
      });
    });
  }

  private applyFilter(){
    this.filteredProducts = (this.category) ?
    this.products.filter(p => p.category === this.category) :
    this.products;
  }

}
