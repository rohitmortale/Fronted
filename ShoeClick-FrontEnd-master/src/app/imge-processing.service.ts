import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { fileHandel } from './admin/models/file-handel.model';
import { Product } from './admin/models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ImgeProcessingService {


  constructor(private sanitizer: DomSanitizer) { }

  public createImage(product: Product) {
    const productImages: any[] = product.productImages;

    const productImagesToFileHandel: fileHandel[] = [];

    for (let i = 0; i < productImages.length; i++) {
      const imageFileDta = productImages[i];

      const imageBlob = this.dataURIToBlob(imageFileDta.picByte, imageFileDta.type)
      const imageFile = new File([imageBlob], imageFileDta.imageName, { type: imageFileDta.type });

      const finalFileHandel: fileHandel = {
        file: imageFile,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageBlob))
      };

      productImagesToFileHandel.push(finalFileHandel)
    }

    product.productImages = productImagesToFileHandel;
    return product;
  }

  public dataURIToBlob(picBytes: any, imageType: any) {
    const byteString: any = window.atob(picBytes);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt[i];
    }

    const blob = new Blob([int8Array], { type: imageType });
    return blob;
  }

}
