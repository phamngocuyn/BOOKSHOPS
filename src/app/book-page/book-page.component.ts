import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';
import { productdata } from '../shared/productmodel';
import { ActivatedRoute, Router } from '@angular/router';
import { CartapiService } from '../services/cartapi.service';


@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
  products: any= [];
  allProducts: any=0;

  constructor(private cartApi: CartapiService) {}

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe((res) => {
      this.products = res;
      this.allProducts = this.cartApi.getTotalAmount();
    })
  }
  removeProduct(items: any){
    this.cartApi.removeCartData(items);
  }
  removeAllProdcut(){
    this.cartApi.removeAllCart();
  }
  

}
