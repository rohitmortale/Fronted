import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-categoy-wise',
  templateUrl: './categoy-wise.component.html',
  styleUrls: ['./categoy-wise.component.css']
})
export class CategoyWiseComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private router: Router,
    private _product : ProductService
  ) { }

  products:any = null;

  category: any = null;
  // variable for store id
  cId = undefined;


  ngOnInit(): void {
    // extracting id from url path
    this.cId = this._route.snapshot.params['cId'];
    // alert(this.cId)
    this.getSingleCategory(this.cId)
    this.getProducts(this.cId)
  }

  getSingleCategory(cid: any){
    this._product.getSingleCategory(cid).subscribe(
      (data)=>{
        this.category = data
        console.log(this.category)
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  getProducts(cid:any){
    this._product.getProductByCategory(cid).subscribe(
      (data)=>{
        this.products = data
        console.log(this.products)
      },
      (error)=>{
        console.log(error)
      }
    )
  }

}
