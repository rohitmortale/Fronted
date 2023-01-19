import { fileHandel } from "./file-handel.model";

export interface Product{
//   map(arg0: (product: Product) => Product): any;
    productName: string,
    size: string;
	actualPrice: number, 
    discountedPrice: number, 
    discountPercentage: number,
	Availibility: boolean,
    category:{
        cid:any
    }
    productImages: fileHandel[]
}