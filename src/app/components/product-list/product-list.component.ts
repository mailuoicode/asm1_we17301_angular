import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products:IProduct[] = [];
  constructor (private productService:ProductService){
    this.productService.getProduct().subscribe(product=>{
      this.products = product
    })
  }
  removeProduct(id:any){
    this.productService.deleteProduct(id).subscribe(()=>{
      this.products = this.products.filter((item)=>item.id!=id)
    })
  }
}
