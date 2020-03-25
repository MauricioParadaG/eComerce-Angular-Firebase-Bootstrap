import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/firebase/product.service';
import { CategoryService } from 'src/app/services/categories/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit, OnDestroy {
  products: any[];
  editing: boolean = false;
  editingProduct;
  categories$;
  subscription: Subscription;
  filteredProducts: any[];
  

  constructor(
    private productService: ProductService,
    public categoryService: CategoryService) 
    { 
    // muestra los productos en pantalla
    //this.products$ = this.productService.getProducts();
    
   this.subscription = this.productService.getProducts().subscribe(products => this.filteredProducts = this.products = products);
    // obtiene categorias para el edit
    this.categories$ = categoryService.getCategories();
  }

  deleteProduct(event, product){
    console.log(product);
    if (confirm("Are you sure you want to delete it?")){
    this.productService.deleteProduct(product.key);
    }
  }

  editProduct(event, product) {
   // console.log(product);
    this.editing = !this.editing;
    this.editingProduct = product;
  }

  updateProduct(){
    //console.log(this.editingProduct);
    this.productService.updateProduct(this.editingProduct.key,this.editingProduct);
    this.editingProduct = {};
    this.editing = false;
  }

  filter(query: string){
    //console.log(query);
    this.filteredProducts = (query) ?
    this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
    this.products;

  }


  ngOnInit() { 
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
