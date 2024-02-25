import { Routes } from '@angular/router';
import { CartComponent } from 'src/cart/cart.component';
import { ProductListComponent } from 'src/product-list/product-list.component';

export const routes: Routes = [
    {path: '', redirectTo: 'products', pathMatch: 'full', title: 'Home'},
    {path:'products', component: ProductListComponent, title: 'Products'},
    {path:'cart', component: CartComponent, title: 'Cart'}
];
