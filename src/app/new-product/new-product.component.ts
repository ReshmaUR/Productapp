import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { ProductModel } from '../product-list/product.model';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  title:String = "Add Product";
  constructor(private productService : ProductService, private router : Router) { }
  productItem = new ProductModel(null,null,null,null,null,null,null,null);
  id:number;
  ngOnInit(): void {
  }
  AddProduct(){
    // if('product._id==""'){
      this.productService.newProduct(this.productItem);
      console.log("called");
      alert("Success");
      this.router.navigate(['/products']);
    // }
  //  else{
     
  //   this.productService.updatePro(this.productItem);
  //     console.log("called");
  //     alert("Updated");
  //     this.router.navigate(['/']);
  //  }
  }
}
