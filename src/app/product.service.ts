import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  // getHome(){
  //   return this.http.get("http://localhost:3000");
  // }
  getProducts(){
    return this.http.get("http://localhost:3000/products");
  }
  newProduct(item){
    return this.http.post("http://localhost:3000/insert",{"product":item})
    .subscribe(data=>{
      console.log(data)
    })
  }
  // for delete
  deletePro(_id:string){
    return this.http.post("http://localhost:3000/delete",{"id":_id})
  }
  //  for update
  updatePro(_id:string){
    return this.http.post("http://localhost:3000/update",{"id":_id})
    .subscribe(data=>{
      console.log(data)
    })
  }


}
