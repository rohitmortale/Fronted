import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories:any = null;

  constructor(
    private _product: ProductService
  ) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(){
    this._product.getAllCategories().subscribe(
      (data)=>{
        this.categories = data
        console.log(this.categories)
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  deleteCategory(cid:any){
    console.log(cid)
    this._product.deleteCategory(cid).subscribe(
      (data)=>{
        console.log(data)
        window.location.reload();
      },
      (error)=>{
        console.log(error)
      }
    )
  }

}
