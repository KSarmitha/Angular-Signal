import { Injectable, computed, signal } from '@angular/core';
import { AppService, IProduct } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItems = signal<IProduct[]>([]);
  public totalItems = computed(() => this.cartItems().length);      // computed method available for signal, totaoItems is a signal
  public subTotals = computed(() => this.cartItems().reduce((preVal, curr: IProduct) => {
    return preVal + Number(curr.price);
  }, 0))

  constructor(
    private appService: AppService
  ) { }


  addProduct(product: IProduct): void {
    this.cartItems.mutate((val) => {
      val.push(product);
      this.appService.products()?.forEach((item: IProduct) => {
        if (item.id === product.id) {
          item.rating.count -= 1;
        }
      })
    })
  }

  removeProduct(index: number): void {
    this.cartItems.mutate((val) => {
      const product = val.splice(index, 1);
      this.appService.products()?.forEach((item: IProduct) => {
        if (item.id === product[0].id) {
          item.rating.count += 1;
        }
      })
    })
  }
}
