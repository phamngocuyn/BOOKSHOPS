import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartapiService {
  constructor(private http: HttpClient) {  }
  cartDataList: any= [];
  products = new BehaviorSubject<any>([]);

  getProductData(){
    return this.products.asObservable();
  }

  setProduct(product: any){
    this.cartDataList.push(...product);
    this.products.next(product);
  }

  addTocart(product: any){
    this.cartDataList.push(product);
    this.products.next(this.cartDataList);
    this.getTotalAmount();
    console.log(this.cartDataList)
  }

  getTotalAmount():number{
    let totalPrice = 0;
    this.cartDataList.forEach((item: any) => {
        totalPrice += item.total;
    });
    return totalPrice;
  }

  removeCartData(product:any){
    this.cartDataList.map((a:any, index:any) =>{
      if(product.id === a.id){
        this.cartDataList.splice(index,1)
      }
    })
    this.products.next(this.cartDataList);
  }

  removeAllCart(){
    this.cartDataList = []
    this.products.next(this.cartDataList)
  }
}
