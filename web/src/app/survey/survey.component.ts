import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import { GlobalMethods } from '../services/global_methods';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  formGroup: FormGroup;
  sdata:any={}
  constructor(private fb : FormBuilder ,private gbmethods : GlobalMethods) {
    this.formGroup = this.fb.group({
      
      answers: this.fb.array([])
    });
   }

  ngOnInit() {
    // this.gbmethods.getDataapi(this.gbmethods.getsurvey_url+"/5c7e072f2aa87b1e28d33964").subscribe( Response => {
    //   this.sdata=Response;
      
    //  if(Response){
     
    //  }else{
    //    console.log('error in responce');
    //  }
    // },
    // error => {
    //   console.error("Error Getting  survey!");
    //   console.error(error);
    // });

    this.sdata=localStorage.getItem('viewsurvey');
    this.sdata=JSON.parse(this.sdata);
    console.log(this.sdata);
    let control = <FormArray>this.formGroup.controls.answers;
      this.sdata.questions.forEach(x => {
        control.push(this.fb.group({ 
          question: x.question,
          answer : ['']
         }))
      })
  }
  sub(data:any){
    console.log(data);
  }


}
