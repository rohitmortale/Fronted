import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { fileHandel } from '../models/file-handel.model';
import { Product } from '../models/Product.model';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private router: Router,
    private _product: ProductService,
    private snack: MatSnackBar,
    private sanitizer: DomSanitizer,
  ) { }


  categoryData: any


  categories: any


  product: any = null

  prod: any;
  // variable for store id
  pId = undefined;

  ngOnInit(): void {
    this.getCategories()

    // extracting id from url path
    this.pId = this._route.snapshot.params['pId'];

    this._product.getSingleProduct(this.pId).subscribe(
      (data) => {
        this.product = data
        // this.picByteToFile();
        // this.checkFile()
        console.log(data)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  checkFile(i: number) {
    if (this.product.productImages[i].picByte != undefined) {
      return true
    } else {
      return false
    }
  }


  getCategories() {
    this._product.getAllCategories().subscribe(
      (data) => {

        this.categories = data
        console.log(this.categories)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  calDiscountedPrice() {

    var ap = this.product.actualPrice
    var dp = this.product.discountPercentage


    console.log(ap)
    console.log(dp)

    // let str = parseFloat(ap).toFixed(2)

    // let num = parseFloat(str);
    let ans = ap * (1 - dp / 100)

    this.product.discountedPrice = ans


  }

  addProduct() {

    // this.picByteToFile()
    const producyFormData = this.prepareFormData(this.product);

    console.log(producyFormData);

    this._product.updateProduct(producyFormData).subscribe(
      (data) => {
        // success
        console.log(data)
        this.router.navigate(['admin/manage'])

      },
      (error) => {
        // error
        this.snack.open('Somthing Went wrong!! Try again', '', {
          duration: 3000,
        });
        console.log(error)
      }
    )
  }

  prepareFormData(product: Product): FormData {
    const formData = new FormData();

    formData.append(
      'product',
      new Blob([JSON.stringify(product)], { type: 'application/json' })
    );


    for (var i = 0; i < product.productImages.length; i++) {
      formData.append(
        'imageFile',
        product.productImages[i].file,
        // product.productImages[i].file.name
      )
    }

    return formData;
  }

  picByteToFile() {
    let data: any[] = []
    for (var i = 0; i < this.product.productImages.length; i++) {

      if (this.product.productImages[i].picByte != undefined) {


        const file = new File([this.product.productImages[i].picByte], this.product.productImages[i].imageName, { type: this.product.productImages[i].type })

        const fileHandel: fileHandel = {
          file: file,
          url: this.sanitizer.bypassSecurityTrustUrl(
            window.URL.createObjectURL(file)
          )
        }
        data.push(fileHandel)
      }
    }
    console.log(data)

    this.product.productImages = data;
    console.log(this.product)

  }

  onFileSelected(event: any) {

    if (event.target.files) {
      const file = event.target.files[0];

      const fileHandel: fileHandel = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }
      this.product.productImages.push(fileHandel);
      console.log(this.product)
      // this.checkFile()
    }
  }

  removeImage(i: number) {
    this.product.productImages.splice(i, 1);
  }

}
