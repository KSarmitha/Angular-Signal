import { Component, inject } from '@angular/core';
import { ApiService, IProduct } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  protected products:IProduct[] = []; 
  protected cartService = inject(CartService);
  protected apiService = inject(ApiService);

  addToCart(product: IProduct): void {
    this.cartService.addProduct(product);
  }
}
