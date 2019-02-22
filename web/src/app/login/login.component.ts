import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup,FormBuilder  } from '@angular/forms';
import { GlobalMethods } from '../services/global_methods';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private element: ElementRef, formbuilder: FormBuilder ,private gbmethods : GlobalMethods) { 
    this.loginForm = formbuilder.group({
      'email': "",
      'pass': ""
    });
    this.gbmethods=gbmethods;
  }

  ngOnInit() {
  }
  submitForm(data :any){
    this.gbmethods.PostData(this.gbmethods.login_url,data).subscribe( data => {
           // refresh the list
          console.log(data);
         },
         error => {
           console.error("Error saving food!");
           console.error(error);
         });
    }
  
}

