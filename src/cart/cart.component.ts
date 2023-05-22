import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  constructor(
    public cartService: CartService
  ) { }

  removeItem(index: number): void {
    this.cartService.removeProduct(index);
  }
}
