import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { ProductModel } from '../product-list/product.model';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  title:String = "Update Product";
  constructor(private productService : ProductService, private router : Router) { }
  productItem = new ProductModel(null,null,null,null,null,null,null,null);
  id:number;
  ngOnInit(): void {
  }
  UpdateProduct(){
    // this.productService.updatePro();  
    console.log("called");
    alert("Updated");
    this.router.navigate(['/products']);
  }
 
}
