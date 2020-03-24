import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/firebase/product.service';
import { CategoryService } from 'src/app/services/categories/category.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  products$;
  editing: boolean = false;
  editingProduct;
  categories$;

  constructor(
    private productService: ProductService,
    public categoryService: CategoryService) 
    { 
    this.products$ = this.productService.getProducts();
    this.categories$ = categoryService.getCategories();
  }

  editProduct(event, product) {
   // console.log(product);
    this.editing = !this.editing;
    this.editingProduct = product;
  }

  updateProduct(){
    console.log(this.editingProduct);
  }

  ngOnInit() { 
  }



}
