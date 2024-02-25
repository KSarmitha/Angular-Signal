import { Injectable, computed, inject, signal } from '@angular/core';
import { ApiService, IProduct } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItems = signal<IProduct[]>([]);
  public totalItems = computed(() => this.cartItems().length);
  public subTotals = computed(() => this.cartItems().reduce((preVal, curr: IProduct) => {
    return preVal + Number(curr.price);
  }, 0))

  private apiService = inject(ApiService);

  constructor() {}

  addProduct(product: IProduct): void {
    this.cartItems.set([...this.cartItems(), product]);
    this.apiService.products()?.forEach((item: IProduct) => {
      if (item.id === product.id) {
        item.rating.count -= 1;
      }
    })
  }

  removeProduct(index: number): void {
    const product = this.cartItems().splice(index, 1);
    this.cartItems.set(this.cartItems().filter((item: IProduct) => item.id !== product[0].id));

    this.apiService.products()?.forEach((item: IProduct) => {
      if (item.id === product[0].id) {
        item.rating.count += 1;
      }
    })
  }
}
