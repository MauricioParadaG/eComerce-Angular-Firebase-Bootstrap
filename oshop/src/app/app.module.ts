import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Route} from '@angular/router';

// FIRESTORE
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";


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


const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsComponent },
  {path: 'shopping-cart', component: ShoppingCartComponent },
  {path: 'check-out', component: CheckOutComponent },
  {path: 'order-success', component: OrderSuccessComponent },
  {path: 'login', component: LoginComponent },
  {path: 'admin/products', component: AdminProductComponent },
  {path: 'admin/orders', component: AdminProductComponent }
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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
