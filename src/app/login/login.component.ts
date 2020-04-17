import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  addressForm = this.fb.group({
    email: [null, Validators.required, Validators.email],
    password: [null, Validators.required, 
      Validators.pattern('[a-zA-Z/\d]~-=!@#$%^&*_=+;:,.></?'), Validators.minLength(8)]
  });

  //password
  hide = true;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
  }

}

