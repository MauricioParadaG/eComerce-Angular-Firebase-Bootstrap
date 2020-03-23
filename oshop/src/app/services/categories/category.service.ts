import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireList} from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  // Obtener categoria de Base de datos
  getCategories()  {
    // console.log(this.db.list('/categories/'));
    return this.db.list('/categories/',
    query => query.orderByChild('name')).valueChanges();
  }

}
