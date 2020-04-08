import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import{Product} from '../../models/products';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }
  
  private create(){
   return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  // metodo temporar que ahorita borro, para seguirle el hilo al video, No sirve para nada
 private getCart(cartId: string){
  return this.db.object('/shopping-carts/' + cartId);
 }
  
  private async getOrCreateCartId() {
    const cartId = localStorage.getItem('cartId');
    //console.log(cartId);

    if (cartId)
      return cartId;
    
    const result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  private getItem(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  public async addToCart(product){
    let cartId = await this.getOrCreateCartId();
    let item$ =  this.getItem(cartId, product.key);
    
    item$.snapshotChanges().pipe(take(1)).subscribe(
      i => {
      item$.update({product: product, quantity: ((i.payload.hasChild('quantity')) ? i.payload.val()['quantity'] + 1 : 1)  });

      console.log('adding new product to cart');
          
      }
    )
  }



}
