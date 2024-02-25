import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public products = toSignal<IProduct[]>(this.http.get<IProduct[]>('https://fakestoreapi.com/products')); //
  public products$ = toObservable(this.products);  // signal to observable

  constructor(
    private http: HttpClient
  ) { }
}

export interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating: IRating;
}

export interface IRating {
  rate: number;
  count: number;
}