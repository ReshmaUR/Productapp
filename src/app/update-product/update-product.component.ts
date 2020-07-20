import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { ProductModel } from '../product-list/product.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  title:String = "Update Product";
  constructor(private productService : ProductService, private router : Router,private _route:ActivatedRoute) { }
  updateItem = new ProductModel(null,null,null,null,null,null,null,null);
  // id:number;
  ngOnInit(): void {
    let id=this._route.snapshot.paramMap.get("id")
    const ID={id:id};   //put _
    this.productService.updated(ID)
    .subscribe((data)=>{this.updateItem=JSON.parse(JSON.stringify(data)); })
  }
  UpdateProduct(){
    let id=this._route.snapshot.paramMap.get("id")
    const ID={id:id};
    this.productService.updatePro(ID,this.updateItem)
    alert('Successfully updated');
    this.router.navigate(['/products']);
  }
 
 
}
