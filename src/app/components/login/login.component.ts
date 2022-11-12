import { Component, OnInit } from '@angular/core';
import {IUserDto} from "../models/IUserDto";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserDto: IUserDto = {
    email: '',
    password: ''
  };
  isLoggedIn = false;
  username = '';
  constructor(

  ) { }

  submitLogin() {
    const savedDataAboutUser = {
      email: this.UserDto.email,
    };
    const userStr = JSON.stringify(savedDataAboutUser);
    console.log(userStr)
    localStorage.setItem('user', userStr);

    this.username = this.UserDto.email

    if (userStr) {
      const user = JSON.parse(userStr);
      console.log(user);

      if (user) {
        this.isLoggedIn = true;
      }
    } else {
      this.isLoggedIn = false;
    }
  }
  logout() {
    localStorage.clear();
    this.isLoggedIn = false;
  }
  ngOnInit(): void {

  }

}

