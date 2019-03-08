import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalMethods } from '../services/global_methods';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addsurvey',
  templateUrl: './addsurvey.component.html',
  styleUrls: ['./addsurvey.component.css']
})
export class AddsurveyComponent implements OnInit {

  qtypes :any =['select','Multiple Choice','Check Boxes','Short Text','Long Text Area','Date','Time','Date and Time','Drop Down','Linear Scale','Rating Grid','Strongly Agree','Strongly Disagree'];
  myForm: FormGroup;
  res :any={};
  editdata :any;
  editmode:boolean=false;
  constructor(private route: ActivatedRoute,private fb: FormBuilder ,private router: Router,private gbmethods : GlobalMethods) { 
    this.myForm = this.fb.group({
      name:'',
      questions: this.fb.array([])
    })
    //this.setCompanies();
  }
  setoptions(x){
    let arr = new FormArray([])
    x.options.forEach(y => {
      arr.push(this.fb.group({ 
        option: y.option 
      }))
    })
  return arr;
  }
  ngOnInit() {
     this.editdata=localStorage.getItem('myHiddenData');
     this.editdata=JSON.parse(this.editdata);
     if(this.editdata =="" || this.editdata==null){
     }else{
       this.editmode=true;
      console.log(this.editdata);
      //this.myForm.value.name=this.editdata.name;
      this.myForm = this.fb.group({
        name:this.editdata.name,
        questions: this.fb.array([])
      })
      let control = <FormArray>this.myForm.controls.questions;
      this.editdata.questions.forEach(x => {
        control.push(this.fb.group({ 
          qtype: x.qtype, 
          question: x.question,
          options: this.setoptions(x) }))
      })
     }
    // console.log(this.route.snapshot.params.id);
    // if (this.route.snapshot.params.id != undefined || this.route.snapshot.params.id != "undefined") {
    //   let url=this.gbmethods.getsurvey_url+this.route.snapshot.params.id;
    //   this.gbmethods.getData(url).subscribe( Response => {
    //      this.res=Response;
    //     console.log(this.res);
    
    //   },
    //   error => {
    //     console.error("Error adding survey!");
    //     console.error(error);
    //   });
    // }
  }
  addNewQuestions() {
    let control = <FormArray>this.myForm.controls.questions;
    control.push(
      this.fb.group({
        qtype: [''],
        question:[''],
        options: this.fb.array([])
      })
    )
  }

  deleteQuestions(index) {
    let control = <FormArray>this.myForm.controls.questions;
    control.removeAt(index)
  }
  addNewOption(control) {
    control.push(
      this.fb.group({
        option: ['']
    }))
  }
  
  deleteOption(control, index) {
    control.removeAt(index)
  }

  submitForm(data : any){
    data.cid=localStorage.getItem('user_id');
    this.gbmethods.PostData(this.gbmethods.addsurvey_url,data).subscribe( Response => {
      let res:any=Response;
      console.log(res);
     if(res.status==true){
       
     }else{
       console.log(res.message);
     }
    },
    error => {
      console.error("Error adding survey!");
      console.error(error);
    });
  }

  saveForm(data: any){
    data.id=this.editdata._id;
    this.gbmethods.PostData(this.gbmethods.editsurvey_url,data).subscribe( Response => {
      let res:any=Response;
      console.log(res);
     if(res.status==true){
      localStorage.setItem("myHiddenData","");
       this.router.navigateByUrl('view');
     }else{
       console.log(res.message);
     }
    },
    error => {
      console.error("Error adding survey!");
      console.error(error);
    });

  }
 



}
