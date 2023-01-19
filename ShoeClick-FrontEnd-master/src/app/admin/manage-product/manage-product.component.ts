import { Component, OnInit, Pipe } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImgeProcessingService } from 'src/app/imge-processing.service';
import { ProductService } from 'src/app/services/product.service';
import { ShowProductImagesComponent } from 'src/app/show-product-images/show-product-images.component';

import { map } from 'rxjs';
import { Product } from '../models/Product.model';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  products:any = null;

  constructor(
    private _product: ProductService,
    public dialog: MatDialog,
    private imageProcessing: ImgeProcessingService,
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  // .pipe(
  //   map((x : any , i) => x.map((product: Product) => this.imageProcessing.createImage(product)  ) )
  // )

  getAllProducts(){
    this._product.getAllProduct()
    // .pipe(
    //   map((x : any , i) => x.map((product: Product) => this.imageProcessing.createImage(product)  ) )
    // )
    .subscribe(
      (data)=>{
        this.products = data;
        console.log(this.products)
      },
      (error)=>{
        console.log(error)
      }
    )
  }


  openDialog(product:any) {

    console.log(product)
    this.dialog.open(ShowProductImagesComponent, {
      data:{
        images:product
      },
      height: '500px',
      width: '800px'
    });
  }

  deleteProduct(pId: any){
    this._product.deleteProduct(pId).subscribe(
      (data)=>{
        console.log(data)
        window.location.reload()
      },
      (error)=>{
        console.log(error)
      }
    )
  }

}
