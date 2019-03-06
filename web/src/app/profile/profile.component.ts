import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalMethods } from '../services/global_methods';
import { FormBuilder,FormGroup ,FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  myForm: FormGroup;
  surveyids:any ={};
  constructor(private fb: FormBuilder ,private router: Router,private gbmethods : GlobalMethods) {
    this.myForm = this.fb.group({
      name:'',
      emailid:'',
      number:'',
      branches: this.fb.array([])
    })
   }

  ngOnInit() {
    this.gbmethods.PostData(this.gbmethods.getallsurves_url,{cid : localStorage.getItem('user_id')}).subscribe( Response => {
      let res: any=Response;
    this.surveyids = res;

  },
  error => {
    console.error("Error adding survey!");
    console.error(error);
  });
    this.gbmethods.getDataapi(this.gbmethods.getprofile+"/"+localStorage.getItem('user_id')).subscribe( Response => {
      let res:any=Response;
      console.log(res);
     if(res.status==true){
      this.myForm=this.fb.group({
        name: res.name,
        emailid: res.emailid,
        number: res.number,
        branches: this.fb.array([])
      })
      let control = <FormArray>this.myForm.controls.branches;
      res.branches.forEach(x => {
        control.push(this.fb.group({ 
          name: x.name, 
          location: x.location,
          status:x.status,
          surveyid:x.surveyid
           }))
      })
     }else{
       console.log(res.message);
     }
    },
    error => {
      console.error("Error adding survey!");
      console.error(error);
    });
  }
  addNewBranch(){
    let control = <FormArray>this.myForm.controls.branches;
    control.push(
      this.fb.group({
        name: [''],
        location:[''],
        status:[''],
        surveyid: ['']
      })
    )
  }
  DeleteBranch(index){
    let control = <FormArray>this.myForm.controls.branches;
    control.removeAt(index)
  }
  submit(data:any){
    this.gbmethods.PostData(this.gbmethods.updateuser_url,data).subscribe( Response => {
      let res: any=Response;
    this.surveyids = res;

  },
  error => {
    console.error("Error adding survey!");
    console.error(error);
  }); 
  }
}
