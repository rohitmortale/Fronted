import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../admin/models/Product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-show-single-product',
  templateUrl: './show-single-product.component.html',
  styleUrls: ['./show-single-product.component.css']
})
export class ShowSingleProductComponent implements OnInit {

  productSelectedIndex = 0;

  constructor(
    private _route: ActivatedRoute,
    private router: Router,
    private _product : ProductService
  ) { }

  pId = undefined;
  prod: any;
  images:any;
  product: Product={
    productName: '',
    size: '',
    actualPrice: 0,
    discountedPrice: 0,
    discountPercentage: 0,
    Availibility: false,
    productImages: [],
    category: {
      cid:0
    }
  }


  ngOnInit(): void {
    this.pId = this._route.snapshot.params['pId'];
    this.getSingleProduct();
  }

  getSingleProduct(){
    this._product.getSingleProduct(this.pId).subscribe(
      (data)=>{
        this.prod = data;
        this.images = this.prod.productImages;
        console.log(this.images)
        console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  changeIndex(i: number){
    this.productSelectedIndex = i;
  }

}
