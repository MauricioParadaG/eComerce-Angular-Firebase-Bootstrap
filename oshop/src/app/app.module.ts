import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// ng-bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Router
import {RouterModule, Route} from '@angular/router';

// FIRESTORE
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule,AngularFireAuth } from "@angular/fire/auth";




// Components
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { LoginComponent } from './components/login/login.component';
import { AdminProductComponent } from './components/admin/admin-product/admin-product.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { ProductFormComponent } from './components/admin/product-form/product-form.component';

//Services
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { CategoryService } from './services/categories/category.service';
import { ProductService } from './services/firebase/product.service';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { DemoComponent } from './components/demo/demo/demo.component';
import { ProductCardComponent } from './components/shareUsersAdmin/product-card/product-card.component';
import { ShoppingCartService } from './services/firebaseCart/shopping-cart.service';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';



const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'demo', component: DemoComponent },
  {path: 'products', component: ProductsComponent },
  {path: 'shopping-cart', component: ShoppingCartComponent },
  {path: 'login', component: LoginComponent },
  {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService] },
  {path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService] },
  {path: 'my/orders', component:MyOrdersComponent, canActivate: [AuthGuardService]},
  {path: 'admin/products', component: AdminProductComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
  {path: 'admin/products/new', component: ProductFormComponent , canActivate: [AuthGuardService, AdminAuthGuardService] },
  {path: 'admin/orders',component: AdminOrdersComponent, canActivate: [AuthGuardService, AdminAuthGuardService] }
  
];

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductComponent,
    AdminOrdersComponent,
    ProductFormComponent,
    LoginComponent,
    ProductFilterComponent,
    DemoComponent,
    ProductCardComponent,
    ProductQuantityComponent
   
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes),
    NgbModule,
    FormsModule
    //AngularFireAuth  si lo llamo, lanza error, pero en login si funciono
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    AdminAuthGuardService,
    CategoryService,
    ProductService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
