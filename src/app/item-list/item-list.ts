import { Component } from '@angular/core';
import { Product } from './Product';
import { ProductCart } from '../product-cart';

@Component({
  selector: 'app-item-list',
  standalone: false,
  templateUrl: './item-list.html',
  styleUrl: './item-list.scss'
})
export class ItemList {
  products: Product[] = [
    {
      name: 'Tapa de termo',
      category: 'Bazar',
      price: 1500,
      stock: 30,
      image: "/assets/img/tapa_termo.jpeg",
      quantity: 0,
    },
    {
      name: 'Burbujero',
      category: 'Jugetes',
      price: 800,
      stock: 0,
      image: "/assets/img/burbujero.jpeg",
      quantity: 0,
    },
    {
      name: 'Aros x 6',
      category: 'Accesorios',
      price: 3000,
      stock: 3,
      image: "/assets/img/arosX6.jpeg",
      quantity: 0,
    },
  ]

  constructor(private cart: ProductCart) {
    
  }

  addToCart(product: Product): void {
    this.cart.addToCart(product);
    product.stock-=product.quantity;
    product.quantity=0;
  }

  downQuantity(product: Product): void {
    if (product.quantity > 0)
      product.quantity--;
  }

  upQuantity(product: Product): void {
    if (product.quantity < product.stock)
      product.quantity++;
  }
}
