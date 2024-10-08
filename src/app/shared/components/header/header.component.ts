import { Component } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
   count!:number;

   constructor(private cart:CartService){

   }

   ngOnInit(){
    this.cart.cartCountObs$.subscribe({
      next:(resp:any)=>{
        this.count = resp;
      }
    })

    this.getCartItems();

   }

  getCartItems() {
   let cartItems = this.cart.getCartDataFromLocalStorage();
   this.count = cartItems.length;
  }

}
