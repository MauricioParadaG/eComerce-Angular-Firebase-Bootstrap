import { Product } from './products';
export class ShoppingCartItem{
    key: string;
    title: string;
    imageUrl: string;
    price: number;
    quantity: number;    

    //constructor(public product: Product, public quantity: number ){}

    get subTotalPrice(){
        return this.price * this.quantity;
    }

}

