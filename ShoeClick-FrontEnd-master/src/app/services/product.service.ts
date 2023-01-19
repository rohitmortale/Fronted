import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../admin/models/Product.model';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getAllCategories(){
    return this.http.get(`${baseUrl}/category`)
  }

  public getSingleCategory(cid:any){
    return this.http.get(`${baseUrl}/category/${cid}`)
  }

  public addCategory(category:any){
    return this.http.post(`${baseUrl}/category`, category);
  }

  public updateCategory(category:any){
    return this.http.put(`${baseUrl}/category`, category);
  }

  public deleteCategory(cid:any){
    return this.http.delete(`${baseUrl}/category/${cid}`)
  }

  public getProductByCategory(cid:any){
    return this.http.get(`${baseUrl}/productByCategory/${cid}`)
  }

  public addProduct(product: FormData){
    return this.http.post(`${baseUrl}/product`, product);
  }

  public updateProduct(product: FormData){
    return this.http.put(`${baseUrl}/product`, product)
  }

  public getAllProduct(){
    return this.http.get(`${baseUrl}/allProduct`)
  }

  public getSingleProduct(pId: any){
    return this.http.get(`${baseUrl}/product/${pId}`)
  }

  public deleteProduct(pId: any){
    return this.http.delete(`${baseUrl}/product/${pId}`)
  }

}
