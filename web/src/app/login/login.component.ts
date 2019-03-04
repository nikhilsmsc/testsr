import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup,FormBuilder  } from '@angular/forms';
import { GlobalMethods } from '../services/global_methods';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private element: ElementRef,private _location: Location,private router: Router, formbuilder: FormBuilder ,private gbmethods : GlobalMethods) { 
    this.loginForm = formbuilder.group({
      'emailid': "",
      'pass': ""
    });
    this.gbmethods=gbmethods;
  }

  ngOnInit() {
    if (localStorage.getItem('user_id') == undefined || localStorage.getItem('user_id') == "undefined" || localStorage.getItem('user_id') =="" ) {
     
    }else{
      this.router.navigateByUrl('home');
    }
  }
  submitForm(data :any){
    this.gbmethods.PostData(this.gbmethods.login_url,data).subscribe( Response => {
           let res:any=Response;
           console.log(res);
          if(res.status==true){
            if(res.statuscode==0){
              localStorage.setItem('user_id', res.user._id);
              localStorage.setItem('name', res.user.name );
              //this._location.back();
              this.router.navigateByUrl('home');
            }
          }else{
            console.log(res.message);
          }
         },
         error => {
           console.error("Error saving food!");
           console.error(error);
         });
    }
  
}

