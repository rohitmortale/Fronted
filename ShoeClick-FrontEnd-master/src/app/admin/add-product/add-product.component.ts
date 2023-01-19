import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { fileHandel } from '../models/file-handel.model';
import { Product } from '../models/Product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product = {
    productName: '',
    size: '',
    actualPrice: 0,
    discountedPrice: 0,
    discountPercentage: 0,
    Availibility: false,
    productImages: [],
    category: {
      cid:'',
    },
  }

  categoryData:any


  categories : any

  constructor(
    private productService: ProductService,
    private snack: MatSnackBar,
    private sanitizer: DomSanitizer,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCategories()
  }


  getCategories(){
    this.productService.getAllCategories().subscribe(
      (data)=>{
        
        this.categories = data
        console.log(this.categories)
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  calDiscountedPrice(){

    var ap = this.product.actualPrice
    var dp = this.product.discountPercentage


    console.log(ap)
    console.log(dp)

    // let str = parseFloat(ap).toFixed(2)

    // let num = parseFloat(str);
    let ans = ap * (1 - dp / 100)
    
    this.product.discountedPrice = ans

    // console.log(ans)
    // console.log(actualPrice.value);
    // console.log(per.value);
  }

  addProduct() {

    const producyFormData = this.prepareFormData(this.product);

    this.productService.addProduct(producyFormData).subscribe(
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
        product.productImages[i].file.name
      )
    }

    return formData;
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
      console.log("inside file selected ")
      console.log(fileHandel)
    }
  }

  removeImage(i: number){
    this.product.productImages.splice(i, 1);
  }






}
