import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart{
   // items: ShoppingCartItem[] = []; 
   items: ShoppingCartItem[] = []; 

   constructor(public itemsMap: { [producId:string]: ShoppingCartItem }) {
       for(const productId in itemsMap)
       this.items.push(itemsMap[productId]);
   }

/*
    get productIDs(){
        return Object.keys(this.items);
    }
*/
    get totalItemsCount(){
        let count = 0;
        for (const productId in this.items){
        count = count + this.items[productId].quantity;
        }
        return count;
    }
 }