import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-addsurvey',
  templateUrl: './addsurvey.component.html',
  styleUrls: ['./addsurvey.component.css']
})
export class AddsurveyComponent implements OnInit {
  data = {
    "companies": [
      {
        "company": "yfjfyhj",
        "projects": [
          {
            "projectName": "ghjnh"
          },
          {
            "projectName": "ghnh"
          }
        ]
      },
      {
        "company": "ghjnhfbvn",
        "projects": [
          {
            "projectName": "vnfvhbnvc"
          },
          {
            "projectName": "fvbnfc "
          },
          {
            "projectName": "fvnvbn"
          },
          {
            "projectName": "vbnvcb"
          }
        ]
      }
    ]
  }
  qtypes :any =['Multiple Choice','Check Boxes','Short Text','Long Text Area','Date','Time','Date and Time','Drop Down','Linear Scale','Rating Grid','Strongly Agree','Strongly Disagree'];
  myForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.myForm = this.fb.group({
      name:'',
      questions: this.fb.array([])
    })
    //this.setCompanies();
  }
  
  ngOnInit() {

  }
  addNewCompany() {
    let control = <FormArray>this.myForm.controls.questions;
    control.push(
      this.fb.group({
        qtype: [''],
        qt: [''],
        ans: [''],
      })
    )
  }

  deleteCompany(index) {
    let control = <FormArray>this.myForm.controls.questions;
    control.removeAt(index)
  }

 



}
