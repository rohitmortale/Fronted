import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { fileHandel } from '../admin/models/file-handel.model';
import { Product } from '../admin/models/Product.model';

@Component({
  selector: 'app-show-product-images',
  templateUrl: './show-product-images.component.html',
  styleUrls: ['./show-product-images.component.css']
})
export class ShowProductImagesComponent implements OnInit {

  images: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.receiveImages()
  }

  getImage(url: any) {
    console.log("inside Get image")

    let imgURL = url.changingThisBreaksApplicationSecurity;
    let newImgUrl = imgURL.replace('blob:','')

    // var ret = "data-123".replace('data-', '');
    console.log("Old Url : "+ url.changingThisBreaksApplicationSecurity)
    console.log("new URL : " + newImgUrl)
    return newImgUrl+'.jpg';
  }

  receiveImages() {
    console.log(this.data)
  }



}
