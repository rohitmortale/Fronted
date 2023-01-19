import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {

  categories:any =null
  constructor(
    private _product:ProductService
  ) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(){
    this._product.getAllCategories().subscribe(
      (data)=>{
        this.categories = data;
        console.log(this.categories)
      },
      (error)=>{
        console.log(error)
      }
      
    )

  }

}
