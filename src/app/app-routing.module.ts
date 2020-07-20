import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent} from './new-product/new-product.component';
import { LoginComponent} from './login/login.component';
import { RegisterComponent} from './register/register.component';
import { UpdateProductComponent } from './update-product/update-product.component';
// import { EntryComponent} from './entry/entry.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  // {path:'entry',component:EntryComponent},
  {path:'products',component:ProductListComponent},
  {path:'add',component:NewProductComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'update/:id',component:UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
