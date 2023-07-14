import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productdata } from './shared/productmodel';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  addProduct(data: productdata){
    return this.http.post('https://6440b4a0fadc69b8e070cdb4.mockapi.io/products', data);
  }
  getProduct(){
    return this.http.get<productdata[]>('https://6440b4a0fadc69b8e070cdb4.mockapi.io/products');
  }
  deleteProduct(id: string){
    return this.http.delete('https://6440b4a0fadc69b8e070cdb4.mockapi.io/products/'+ id)
  }

  getProductById(id : string){
    return this.http.get('https://6440b4a0fadc69b8e070cdb4.mockapi.io/products/' + id);
  }
  updateProduct(id: string, data: productdata){
    this.http.put('https://6440b4a0fadc69b8e070cdb4.mockapi.io/products/'+ id , data).subscribe();
  }
  
}
