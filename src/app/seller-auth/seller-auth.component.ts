import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css',
})
export class SellerAuthComponent {
userLogin: any;
  constructor(private seller: SellerService, private router: Router) {}
  showLogin = false;
  authError=''


  ngOnInit(): void {
    this.seller.reloadseller(); 
  }

  signup(data: SignUp): void {
    console.warn(data);
    this.seller.userSignUp(data);
    this.seller.isSignupError.subscribe((isError)=>{
      if(isError){
        this.authError="Successfully signup"
      }
    
    })
  }
  login(data: SignUp): void {
    this.authError=''
    // console.warn(data);
    this.seller.userLogin(data)
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or Password is incorrect"
      }
    })
  }

  openLogin() {
    this.showLogin = true;
  }

  openSignUp() {
    this.showLogin = false;
  }
  
}
