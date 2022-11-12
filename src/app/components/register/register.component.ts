import { Component, OnInit } from '@angular/core';
import {IUsers} from "../models/IUsers";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: IUsers= {
    username: '',
    userFamilyName: '',
    userSureName: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthday: '',
    gender: '',
  };

  constructor() { }

  submitRegister() {
    console.log(this.user)
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.user);
  }

}
