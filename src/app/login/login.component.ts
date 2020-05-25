import { AuthService } from './auth.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password = '';
  username = '';
  showSpinner = true;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  
  onLogin(): void {
    if (this.username === '' || this.password === '') {
      alert("Vui lòng nhập đầy đủ tài khoản hoặc mật khẩu");
    }
    else {
      if (this.showSpinner){
        this.showSpinner = !this.showSpinner;
      }
        if (this.username === 'admin' && this.password === 'admin') {
          setTimeout (() => {
            this.router.navigate(["dashboard"])
            this.authService.isLogin = true;
          }, 2000)}
        else {
          setTimeout(() => {    
            alert("Tài khoản hoặc mật khẩu không đúng"); 
            this.showSpinner = true;
          }, 2000)}
         
    }
  }
}
