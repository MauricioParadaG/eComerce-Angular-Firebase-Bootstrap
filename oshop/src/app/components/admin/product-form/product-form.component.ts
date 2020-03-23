import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { CategoryService } from 'src/app/services/categories/category.service';
import { ProductService } from 'src/app/services/firebase/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  
 

  constructor(
    public categoryService: CategoryService,
    private productService: ProductService
    ) { 
      this.categories$ = categoryService.getCategories();
    }

    save(product) {
      this.productService.saveProduct(product);

    }

  
  ngOnInit(): void {
  }

}
