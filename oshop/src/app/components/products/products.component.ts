import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/firebase/product.service';
import { Product } from 'src/app/models/products';
import { switchMap } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/categories/category.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  category: string;
  products: Product[] = [];
  filteredProducts: Product[] = [] ;
  

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
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

  ngOnInit(): void {
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
