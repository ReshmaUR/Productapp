import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserDetails = {
    "email":"",
    "password":""
  };
  constructor(private _auth: AuthService , private router : Router) { }
  loginUser(){
    this. _auth.loginUser(this.loginUserDetails)
    .subscribe(
      res=>this.router.navigate(['/products']),
      err=>{
        console.log(err)
        alert("Invalid Credentials")
      }

    )
  }
  ngOnInit(): void {
  }

}
