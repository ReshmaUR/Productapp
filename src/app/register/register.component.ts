import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registeredUser = {
    "email":"",
    "password":""
  };
  constructor(private _auth: AuthService, private router : Router) { }
  registerUser(){
    // console.log(this.registeredUser);
    this._auth.registerUser(this.registeredUser)
    .subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
  }

}
