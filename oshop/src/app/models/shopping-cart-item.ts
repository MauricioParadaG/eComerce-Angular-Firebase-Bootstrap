import { Product } from './products';


export class ShoppingCartItem{
    

    constructor(public product: Product, public quantity: number ){
    }

    get subTotalPrice(){
        return this.product.price * this.quantity;
    }

}

