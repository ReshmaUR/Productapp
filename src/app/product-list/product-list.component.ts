import { Component, OnInit } from '@angular/core';
import { ProductModel} from './product.model';
import { ProductService} from '../product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title:String = "Product List";
  products: ProductModel[];
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  constructor(private productService : ProductService) { }
  productItem = new ProductModel(null,null,null,null,null,null,null,null);
  id:number;
  toggleImage() : void{
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe((data)=>{
      this.products = JSON.parse(JSON.stringify(data));
    })
  }
  deleteProduct(_id){
    if(confirm("Are you really want to delete this product?") ==true){
      console.log("done");
      console.log(_id);
      this.productService.deletePro(_id)
      .subscribe(); 
      this.productService.getProducts()
      .subscribe((data)=>{
        this.products = JSON.parse(JSON.stringify(data));
      })
    }
  }

}
