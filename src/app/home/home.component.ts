import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { productdata } from '../shared/productmodel';
import { NgForm } from '@angular/forms';
import { CartapiService } from '../services/cartapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchText: any;
  products !: productdata[];
  @ViewChild('addProduct') form !: NgForm;
  editMode: boolean = false;
  currentProductId!: string;

  constructor(private service: ServiceService, private router:Router, private route: ActivatedRoute, private cartApi: CartapiService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  
  adddata(data: productdata) {
    if(!this.editMode){
      this.service.addProduct(data).subscribe((result) => {
        console.log(result);
      })
    }else{
      this.service.updateProduct(this.currentProductId, data);
    }
  }
  getProducts(){
    this.service.getProduct().subscribe((res) => {
      this.products = res;
      this.products.forEach((a:any) => {
        Object.assign(a,{quantity:1, total:a.price})
      });
    })
  }

  ondelete(id : string){
    if(confirm("you want delete?"))
    this.service.deleteProduct(id).subscribe(res => {
      this.getProducts();
    })
  }
  onEditClicked(id:string){
    this.currentProductId = id;
    let currentProduct = this.products.find((p) => {return p.id === id});
    //console.log(this.form);

    this.form.setValue({
      url: currentProduct?.url,
      name: currentProduct?.name,
      author: currentProduct?.author,
      price: currentProduct?.price
    });

    this.editMode = true;
  }
  

  addToCart(items: any){
    this.cartApi.addTocart(items);
  }
}
