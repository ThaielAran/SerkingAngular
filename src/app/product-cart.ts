import { Injectable } from '@angular/core';
import { Product } from './item-list/Product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductCart {

  private _cartList: Product[]=[];
  cartList:BehaviorSubject<Product[]>=new BehaviorSubject(this._cartList); //encapsules private varibale into observable

  constructor(){}

  addToCart(product: Product) {
    let p= this._cartList.find((v1)=>v1.name==product.name);
    if(!p){
      this._cartList.push({... product}); //clones the object (functional notation)
      console.log(this._cartList);
    }else{
      p.quantity+=product.quantity;
    }
    this.cartList.next(this._cartList); //observable notifies changes in private variable
  }
  
  removeFromCart(product: Product){
     this._cartList=this._cartList.filter((v1) => v1.name !== product.name);
     this.cartList.next(this._cartList);
  }
  //codigo de puntos extra= 55312
  
}
