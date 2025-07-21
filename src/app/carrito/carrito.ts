import { Component } from '@angular/core';
import { ProductCart } from '../product-cart';
import { Product } from '../item-list/Product';

@Component({
  selector: 'app-carrito',
  standalone: false,
  templateUrl: './carrito.html',
  styleUrl: './carrito.scss'
})
export class Carrito {
  cartList: Product[] = [];

  constructor(private cart: ProductCart) {
    cart.cartList.subscribe(c => this.cartList = c)
  }

  removeFromCart(p: Product) {
    this.cart.removeFromCart(p);
  }
}
