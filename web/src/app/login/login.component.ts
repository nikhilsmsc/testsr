import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup,FormBuilder  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private element: ElementRef, formbuilder: FormBuilder) { 
    this.loginForm = formbuilder.group({
      'login_type': 0,
      'email': "",
      'password': ""
    });
  }

  ngOnInit() {
  }
  submitForm(data :any){

    console.log(data);

  }
  
}

