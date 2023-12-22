import { CartItem } from "./CartItem";
export class Cart{
    items:CartItem []= [];

    get totalPrice():number{
        let totalPrice = 0;
       this.items.forEach(item => {
        if (item.price && typeof item.price === 'number') {
            totalPrice += item.price;
          }


           // totalPrice += item.price;                                   
        });
        return totalPrice;
    }

}