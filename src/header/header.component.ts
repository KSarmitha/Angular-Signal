import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/services/cart.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    public cartService: CartService) { }
}
