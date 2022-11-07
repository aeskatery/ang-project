import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  submitRegister() {
    console.log(this.registerForm.value)
    console.log(this.registerForm.value.arguments)
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'username': new FormControl('', [Validators.required]),
      'userFamilyName': new FormControl('', [Validators.required]),
      'userSureName': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required]),
      'birthday': new FormControl(''),
      'gender': new FormControl('')
    })
  }

}

class Users {
  id: number

  constructor(id:number) {
    this.id = id
  }
}
