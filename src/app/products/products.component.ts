import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() product: any
  existingItem: any
  cart: any[] = [];

  addToCart(product: any) {
    this.existingItem = this.cart.find((item) => item.product.id === product.id);{
      if (this.existingItem) {
        this.existingItem.quantity++;
      }
      else {
        this.cart.push({ product: product, quantity: 1 })
      }
    }
  }
  inQuantity(product: { id: any; }) {
    const cartItem = this.cart.find((item) => item.product.id === product.id);
    if (cartItem) {
      cartItem.quantity++;
    }
  }
  deQuantity(product: { id: any; }) {
    const cartItem = this.cart.find((item) => item.product.id === product.id);
    if (cartItem) {
      cartItem.quantity--;
    }
    if (cartItem.quantity == 0) {
      this.cart = this.cart.filter((item) => item.product.id === product.id)
    }
  }
  isInCart(product: any): boolean {
    return this.cart.some((item) => item.product.id === product.id);
  }
  getQuantity(product: any): number {
    const cartItem = this.cart.find((item) => item.product.id === product.id);
    return cartItem ? cartItem.quantity : 0;

  }
}
