import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  products:any = null;

  constructor(
    private _product: ProductService,
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this._product.getAllProduct()
    .subscribe(
      (data)=>{
        this.products = data;
        console.log(this.products)
        // console.log(this.products.pr)
      },
      (error)=>{
        console.log(error)
      }
    )
  }




}
