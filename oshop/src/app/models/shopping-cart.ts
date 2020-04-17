import { ShoppingCartItem } from './shopping-cart-item';
import { Product } from './products';

export class ShoppingCart{
   // items: ShoppingCartItem[] = []; 
   items: ShoppingCartItem[] = []; 

   constructor(public itemsMap: { [producId:string]: ShoppingCartItem }) {
       for(const productId in itemsMap) {
           let item = itemsMap[productId];
        if (item.quantity !== 0){
       this.items.push(new ShoppingCartItem (item.product, item.quantity));
        }
        }
    }
/*
    get productIDs(){
        return Object.keys(this.items);
    }
*/

getQuantity(product: Product){
    let item = this.itemsMap[product.key];
    // console.log( "item " + item);
    return item ? item.quantity: 0 ;
  }

get totalPrice(){
        let sum = 0; 
        for (const productId in this.items)
           sum= sum + this.items[productId].subTotalPrice
        return sum; 
    }

    get totalItemsCount(){
        let count = 0;
        for (const productId in this.items){
        count = count + this.items[productId].quantity;
        }
        return count;
    }
 }