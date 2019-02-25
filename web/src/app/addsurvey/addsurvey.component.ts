import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-addsurvey',
  templateUrl: './addsurvey.component.html',
  styleUrls: ['./addsurvey.component.css']
})
export class AddsurveyComponent implements OnInit {
  surveyForm: FormGroup;
  questions: FormArray;
  constructor(private formBuilder: FormBuilder) { }
  createItem(): FormGroup {
    return this.formBuilder.group({
      'qtype':'',
      'qt': '',
      'answer': '',
    });
  }
  ngOnInit() {
    this.surveyForm = this.formBuilder.group({
      'surveyname': '',
      'questions': this.formBuilder.array([ this.createItem() ])
    });
  }
  addItem(): void {
    this.questions = this.surveyForm.get('questions') as FormArray;
    this.questions.push(this.createItem());
  }
  submitForm(data :any){
    console.log(data);
  }

}
