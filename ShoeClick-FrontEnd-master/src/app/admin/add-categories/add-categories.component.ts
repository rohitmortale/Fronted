import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {

  category:any ={
    title:'',
    description:''
  }

  constructor(
    private _product:ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addCategory(){
    this._product.addCategory(this.category).subscribe(
      (data)=>{
        console.log(data)
        this.router.navigate(['admin/categories'])
      },
      (error)=>{
        console.log(error)
      }
    )
  }

}
