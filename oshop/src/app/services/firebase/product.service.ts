import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //productDoc;
  constructor(private db: AngularFireDatabase) { }

  saveProduct (product){
    return this.db.list('/products').push(product);
  }

  getProducts() {
    return this.db.list('/products').snapshotChanges().pipe(map(actions =>
      actions.map(a => ({
        key: a.payload.key, ...(a.payload.val() as {})
      }))
    ));
  } 

  /*
  updateProduct(id,product) {
    this.productDoc = this.db.object('/products/' + id).update(product);
  }
*/

}
