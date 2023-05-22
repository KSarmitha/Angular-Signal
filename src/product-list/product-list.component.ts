import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService, IProduct } from 'src/services/app.service';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  public products:IProduct[] = []; 

  constructor(
    public appService: AppService,
    private cartService: CartService
  ) { }

  addToCart(product: IProduct): void {
    this.cartService.addProduct(product);
  }

}
