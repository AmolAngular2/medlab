import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartCountSub:BehaviorSubject<number> = new BehaviorSubject(0);
  cartCountObs$ = this.cartCountSub.asObservable();

  constructor() { }

   sendCartCount(count:number){
     this.cartCountSub.next(count); 
   }


  getCartDataFromLocalStorage(): any {
    let cartArr: any = [];
    let cartData = localStorage.getItem("cart");
   
    if (cartData != null) {
      cartArr = JSON.parse(cartData);
      return cartArr;
    } else {
      return cartArr;
    }
  }


}
