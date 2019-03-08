import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalMethods } from '../services/global_methods';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder ,private router: Router,private gbmethods : GlobalMethods) {
    this.myForm = this.fb.group({
      name:'',
      pass:'',
      emailid:'',
      number: '0000000000',
      checkpass:''
    })
   }

  ngOnInit() {
  }
  submitForm(data:any){

    if(data.pass == data.checkpass){
      this.gbmethods.PostData(this.gbmethods.signup_url,data).subscribe( Response => {
        let res:any=Response;
        console.log(res);
       if(res.status==true){
        localStorage.setItem('user_id', res.id);
        localStorage.setItem('name', data.name );
         this.router.navigateByUrl('home')
       }else{
         console.log(res.message);
       }
      },
      error => {
        console.error("Error adding survey!");
        console.error(error);
      });

    }else{

      alert('password is miss matching')
    }

  }
}
