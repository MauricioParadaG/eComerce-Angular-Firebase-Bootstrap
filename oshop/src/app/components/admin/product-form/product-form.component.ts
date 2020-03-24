import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { CategoryService } from 'src/app/services/categories/category.service';
import { ProductService } from 'src/app/services/firebase/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  
 

  constructor(
    private router: Router,
    public categoryService: CategoryService,
    private productService: ProductService
    ) { 
      this.categories$ = categoryService.getCategories();
    }

    save(product) {
      this.productService.saveProduct(product);
      this.router.navigate(['/admin/products']);
    }

  
  ngOnInit(): void {
  }

}
