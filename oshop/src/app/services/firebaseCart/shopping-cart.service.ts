import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import{Product} from '../../models/products';
import { ShoppingCart } from 'src/app/models/shopping-cart';

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

  // Sirve para obtener el cart de cada usuario y pasarlo al componente del product.component.ts, Asi obtiene la cantidad de cada producto

  async getCart(): Promise<Observable<ShoppingCart>> {
  let cartId = await this.getOrCreateCartId();
  return this.db.object('/shopping-carts/' + cartId)
    .valueChanges()
    .pipe(
      map((x: any) => {
        const items = x.items;
        return new ShoppingCart(items);
      })
    )
}


  private async getOrCreateCartId(): Promise<string> {
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

  public async addToCart(product: Product){
   this.updateItem(product,1);
  }

  public async removeFromCart(product: Product){
    this.updateItem(product,-1);
  }

  private async updateItem(product: Product, change:number ){
    let cartId = await this.getOrCreateCartId();
    let item$ =  this.getItem(cartId, product.key);
    
    item$.snapshotChanges().pipe(take(1)).subscribe(
      i => {
      item$.update({title: product.title,
        imageUrl: product.imageUrl,
        price: product.price, quantity: ((i.payload.hasChild('quantity')) ? i.payload.val()['quantity'] + change : 1)  });
     // console.log('adding new product to cart');
      }
    )
  }


}
