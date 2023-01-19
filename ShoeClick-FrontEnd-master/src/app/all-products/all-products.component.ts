import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

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
